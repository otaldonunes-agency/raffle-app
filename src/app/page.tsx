"use client";

import { RaffleStatus, type Raffle } from "@prisma/client";
import { type NextPage } from "next";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  useFindManyRaffle,
  useCreateRaffle,
  useUpdateRaffle,
  useDeleteRaffle,
} from "../lib/hooks";

type AuthUser = { id: string; email?: string | null };

const Welcome = ({ user }: { user: AuthUser }) => {
  const router = useRouter();
  async function onSignout() {
    await signOut({ redirect: false });
    router.push("/signin");
  }
  return (
    <div className="flex gap-4">
      <h3 className="text-lg">Welcome back, {user?.email}</h3>
      <button
        className="text-gray-300 underline"
        onClick={() => void onSignout()}
      >
        Signout
      </button>
    </div>
  );
};

const SigninSignup = () => {
  return (
    <div className="flex gap-4 text-2xl">
      <Link href="/signin" className="rounded-lg border px-4 py-2">
        Signin
      </Link>
      <Link href="/signup" className="rounded-lg border px-4 py-2">
        Signup
      </Link>
    </div>
  );
};

const Raffles = () => {
  // Raffle crud hooks
  const { mutateAsync: createRaffle } = useCreateRaffle();
  const { mutateAsync: updateRaffle } = useUpdateRaffle();
  const { mutateAsync: deleteRaffle } = useDeleteRaffle();

  // list all raffles
  const { data: raffles } = useFindManyRaffle({
    include: { creator: true },
    orderBy: { createdAt: "desc" },
  });

  async function onCreateRaffle() {
    const name = prompt("Enter raffle name");
    const description = prompt("Enter raffle description") || "";
    const imageUrl = prompt("Enter raffle image URL") || "";
    const ticketPrice = prompt("Enter ticket price") || 0;
    const drawDate = prompt("Enter draw date") || new Date();
    const termsConditions = prompt("Enter terms and conditions") || "";

    if (name) {
      await createRaffle({ data: { name, description, imageUrl, ticketPrice, drawDate, termsConditions } });
    }
  }

  async function onTogglePublished(raffle: Raffle) {
    await updateRaffle({
      where: { id: raffle.id },
      data: {
        status: raffle.status === RaffleStatus.FINISHED ?
          RaffleStatus.PUBLISHED :
          RaffleStatus.FINISHED
      }
    });
  }

  async function onDelete(raffle: Raffle) {
    await deleteRaffle({ where: { id: raffle.id } });
  }

  return (
    <div className="container flex flex-col text-white">
      <button
        className="rounded border border-white p-2 text-lg"
        onClick={() => void onCreateRaffle()}
      >
        + Create Raffle
      </button>

      <ul className="container mt-8 flex flex-col gap-2">
        {raffles?.map((raffle) => (
          <li key={raffle.id} className="flex items-end justify-between gap-4">
            <p className={`text-2xl ${!raffle.status ? "text-gray-400" : ""}`}>
              {raffle.name}
              <span className="text-lg"> by {raffle.creator.email}</span>
            </p>
            <div className="flex w-32 justify-end gap-1 text-left">
              <button
                className="underline"
                onClick={() => void onTogglePublished(raffle)}
              >
                {raffle.status === RaffleStatus.PENDING ? "Publish" : "Finish"}
              </button>
              <button className="underline" onClick={() => void onDelete(raffle)}>
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Home: NextPage = () => {
  const { data: session, status } = useSession();

  if (status === "loading") return <p>Loading ...</p>;

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 text-white">
        <h1 className="text-5xl font-extrabold">My Awesome Blog</h1>

        {session?.user ? (
          // welcome & blog posts
          <div className="flex flex-col">
            <Welcome user={session.user} />

          </div>
        ) : (
          // if not logged in
          <SigninSignup />
        )}
<section className="mt-10">
              <Raffles />
            </section>
      </div>
    </main>
  );
};

export default Home;