"use client";

import type { NextPage } from "next";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState, type FormEvent } from "react";
import { useCreateUser } from "~/lib/hooks";

const Signup: NextPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [documentNumber, setDocumentNumber] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [age, setAge] = useState(0);
  const [firstName, setFirstName] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const { mutateAsync: signup } = useCreateUser();
  const router = useRouter();

  async function onSignup(e: FormEvent) {
    e.preventDefault();
    try {
      await signup({ data: { email, password, documentNumber, phoneNumber, age, firstName, imageUrl } });
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      console.error(err);
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      if (err.info?.prisma && err.info?.code === "P2002") {
        // P2002 is Prisma's error code for unique constraint violations
        alert("User already exists");
      } else {
        alert("An unknown error occurred");
      }
      return;
    }

    // signin to create a session
    await signIn("credentials", { redirect: false, email, password });
    router.push("/");
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
      <h1 className="text-5xl font-extrabold text-white">Sign up</h1>
      <form
        className="mt-16 flex flex-col gap-8 text-2xl"
        onSubmit={(e) => void onSignup(e)}
      >
        <div>
          <label htmlFor="email" className="inline-block w-32 text-white">
            Email
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.currentTarget.value)}
            className="ml-4 w-72 rounded border p-2"
          />
        </div>
        <div>
          <label htmlFor="password" className="inline-block w-32 text-white ">
            Password
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.currentTarget.value)}
            className="ml-4 w-72 rounded border p-2"
          />
        </div>
        <input
          type="submit"
          value="Create account"
          className="cursor-pointer rounded border border-gray-500 py-4 text-white"
        />
        <div>
          <label htmlFor="documentNumber" className="inline-block w-32 text-white">
            Document Number
          </label>
          <input
            id="documentNumber"
            type="text"
            value={documentNumber}
            onChange={(e) => setDocumentNumber(e.currentTarget.value)}
            className="ml-4 w-72 rounded border p-2"
          />
        </div>
        <div>
          <label htmlFor="phoneNumber" className="inline-block w-32 text-white">
            Phone Number
          </label>
          <input
            id="phoneNumber"
            type="text"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.currentTarget.value)}
            className="ml-4 w-72 rounded border p-2"
          />
        </div>
        <div>
          <label htmlFor="age" className="inline-block w-32 text-white">
            Age
          </label>
          <input
            id="age"
            type="number"
            value={age}
            onChange={(e) => setAge(parseInt(e.currentTarget.value))}
            className="ml-4 w-72 rounded border p-2"
          />
        </div>
        <div>
          <label htmlFor="firstName" className="inline-block w-32 text-white">
            First Name
          </label>
          <input
            id="firstName"
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.currentTarget.value)}
            className="ml-4 w-72 rounded border p-2"
          />
        </div>
        <div>
          <label htmlFor="imageUrl" className="inline-block w-32 text-white">
            Image URL
          </label>
          <input
            id="imageUrl"
            type="text"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.currentTarget.value)}
            className="ml-4 w-72 rounded border p-2"
          />
        </div>
      </form>
    </div>
  );
};

export default Signup;