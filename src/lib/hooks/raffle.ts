/* eslint-disable */
import type { Prisma, Raffle } from "@zenstackhq/runtime/models";
import type { UseMutationOptions, UseQueryOptions, UseInfiniteQueryOptions, InfiniteData } from '@tanstack/react-query';
import { getHooksContext } from '@zenstackhq/tanstack-query/runtime-v5/react';
import { useModelQuery, useInfiniteModelQuery, useModelMutation } from '@zenstackhq/tanstack-query/runtime-v5/react';
import type { PickEnumerable, CheckSelect, QueryError, ExtraQueryOptions, ExtraMutationOptions } from '@zenstackhq/tanstack-query/runtime-v5';
import type { PolicyCrudKind } from '@zenstackhq/runtime'
import metadata from './__model_meta';
type DefaultError = QueryError;
import { useSuspenseModelQuery, useSuspenseInfiniteModelQuery } from '@zenstackhq/tanstack-query/runtime-v5/react';
import type { UseSuspenseQueryOptions, UseSuspenseInfiniteQueryOptions } from '@tanstack/react-query';

export function useCreateRaffle(options?: Omit<(UseMutationOptions<(Raffle | undefined), DefaultError, Prisma.RaffleCreateArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.RaffleCreateArgs, DefaultError, Raffle, true>('Raffle', 'POST', `${endpoint}/raffle/create`, metadata, options, fetch, true)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.RaffleCreateArgs>(
            args: Prisma.SelectSubset<T, Prisma.RaffleCreateArgs>,
            options?: Omit<(UseMutationOptions<(CheckSelect<T, Raffle, Prisma.RaffleGetPayload<T>> | undefined), DefaultError, Prisma.SelectSubset<T, Prisma.RaffleCreateArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as (CheckSelect<T, Raffle, Prisma.RaffleGetPayload<T>> | undefined);
        },
    };
    return mutation;
}

export function useCreateManyRaffle(options?: Omit<(UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.RaffleCreateManyArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.RaffleCreateManyArgs, DefaultError, Prisma.BatchPayload, false>('Raffle', 'POST', `${endpoint}/raffle/createMany`, metadata, options, fetch, false)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.RaffleCreateManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.RaffleCreateManyArgs>,
            options?: Omit<(UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.SelectSubset<T, Prisma.RaffleCreateManyArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as Prisma.BatchPayload;
        },
    };
    return mutation;
}

export function useFindManyRaffle<TArgs extends Prisma.RaffleFindManyArgs, TQueryFnData = Array<Prisma.RaffleGetPayload<TArgs> & { $optimistic?: boolean }>, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.RaffleFindManyArgs>, options?: (Omit<UseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('Raffle', `${endpoint}/raffle/findMany`, args, options, fetch);
}

export function useInfiniteFindManyRaffle<TArgs extends Prisma.RaffleFindManyArgs, TQueryFnData = Array<Prisma.RaffleGetPayload<TArgs>>, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.RaffleFindManyArgs>, options?: Omit<UseInfiniteQueryOptions<TQueryFnData, TError, InfiniteData<TData>>, 'queryKey' | 'initialPageParam'>) {
    options = options ?? { getNextPageParam: () => null };
    const { endpoint, fetch } = getHooksContext();
    return useInfiniteModelQuery<TQueryFnData, TData, TError>('Raffle', `${endpoint}/raffle/findMany`, args, options, fetch);
}

export function useSuspenseFindManyRaffle<TArgs extends Prisma.RaffleFindManyArgs, TQueryFnData = Array<Prisma.RaffleGetPayload<TArgs> & { $optimistic?: boolean }>, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.RaffleFindManyArgs>, options?: (Omit<UseSuspenseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useSuspenseModelQuery<TQueryFnData, TData, TError>('Raffle', `${endpoint}/raffle/findMany`, args, options, fetch);
}

export function useSuspenseInfiniteFindManyRaffle<TArgs extends Prisma.RaffleFindManyArgs, TQueryFnData = Array<Prisma.RaffleGetPayload<TArgs>>, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.RaffleFindManyArgs>, options?: Omit<UseSuspenseInfiniteQueryOptions<TQueryFnData, TError, InfiniteData<TData>>, 'queryKey' | 'initialPageParam'>) {
    options = options ?? { getNextPageParam: () => null };
    const { endpoint, fetch } = getHooksContext();
    return useSuspenseInfiniteModelQuery<TQueryFnData, TData, TError>('Raffle', `${endpoint}/raffle/findMany`, args, options, fetch);
}

export function useFindUniqueRaffle<TArgs extends Prisma.RaffleFindUniqueArgs, TQueryFnData = Prisma.RaffleGetPayload<TArgs> & { $optimistic?: boolean }, TData = TQueryFnData, TError = DefaultError>(args: Prisma.SelectSubset<TArgs, Prisma.RaffleFindUniqueArgs>, options?: (Omit<UseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('Raffle', `${endpoint}/raffle/findUnique`, args, options, fetch);
}

export function useSuspenseFindUniqueRaffle<TArgs extends Prisma.RaffleFindUniqueArgs, TQueryFnData = Prisma.RaffleGetPayload<TArgs> & { $optimistic?: boolean }, TData = TQueryFnData, TError = DefaultError>(args: Prisma.SelectSubset<TArgs, Prisma.RaffleFindUniqueArgs>, options?: (Omit<UseSuspenseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useSuspenseModelQuery<TQueryFnData, TData, TError>('Raffle', `${endpoint}/raffle/findUnique`, args, options, fetch);
}

export function useFindFirstRaffle<TArgs extends Prisma.RaffleFindFirstArgs, TQueryFnData = Prisma.RaffleGetPayload<TArgs> & { $optimistic?: boolean }, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.RaffleFindFirstArgs>, options?: (Omit<UseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('Raffle', `${endpoint}/raffle/findFirst`, args, options, fetch);
}

export function useSuspenseFindFirstRaffle<TArgs extends Prisma.RaffleFindFirstArgs, TQueryFnData = Prisma.RaffleGetPayload<TArgs> & { $optimistic?: boolean }, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.RaffleFindFirstArgs>, options?: (Omit<UseSuspenseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useSuspenseModelQuery<TQueryFnData, TData, TError>('Raffle', `${endpoint}/raffle/findFirst`, args, options, fetch);
}

export function useUpdateRaffle(options?: Omit<(UseMutationOptions<(Raffle | undefined), DefaultError, Prisma.RaffleUpdateArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.RaffleUpdateArgs, DefaultError, Raffle, true>('Raffle', 'PUT', `${endpoint}/raffle/update`, metadata, options, fetch, true)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.RaffleUpdateArgs>(
            args: Prisma.SelectSubset<T, Prisma.RaffleUpdateArgs>,
            options?: Omit<(UseMutationOptions<(CheckSelect<T, Raffle, Prisma.RaffleGetPayload<T>> | undefined), DefaultError, Prisma.SelectSubset<T, Prisma.RaffleUpdateArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as (CheckSelect<T, Raffle, Prisma.RaffleGetPayload<T>> | undefined);
        },
    };
    return mutation;
}

export function useUpdateManyRaffle(options?: Omit<(UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.RaffleUpdateManyArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.RaffleUpdateManyArgs, DefaultError, Prisma.BatchPayload, false>('Raffle', 'PUT', `${endpoint}/raffle/updateMany`, metadata, options, fetch, false)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.RaffleUpdateManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.RaffleUpdateManyArgs>,
            options?: Omit<(UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.SelectSubset<T, Prisma.RaffleUpdateManyArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as Prisma.BatchPayload;
        },
    };
    return mutation;
}

export function useUpsertRaffle(options?: Omit<(UseMutationOptions<(Raffle | undefined), DefaultError, Prisma.RaffleUpsertArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.RaffleUpsertArgs, DefaultError, Raffle, true>('Raffle', 'POST', `${endpoint}/raffle/upsert`, metadata, options, fetch, true)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.RaffleUpsertArgs>(
            args: Prisma.SelectSubset<T, Prisma.RaffleUpsertArgs>,
            options?: Omit<(UseMutationOptions<(CheckSelect<T, Raffle, Prisma.RaffleGetPayload<T>> | undefined), DefaultError, Prisma.SelectSubset<T, Prisma.RaffleUpsertArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as (CheckSelect<T, Raffle, Prisma.RaffleGetPayload<T>> | undefined);
        },
    };
    return mutation;
}

export function useDeleteRaffle(options?: Omit<(UseMutationOptions<(Raffle | undefined), DefaultError, Prisma.RaffleDeleteArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.RaffleDeleteArgs, DefaultError, Raffle, true>('Raffle', 'DELETE', `${endpoint}/raffle/delete`, metadata, options, fetch, true)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.RaffleDeleteArgs>(
            args: Prisma.SelectSubset<T, Prisma.RaffleDeleteArgs>,
            options?: Omit<(UseMutationOptions<(CheckSelect<T, Raffle, Prisma.RaffleGetPayload<T>> | undefined), DefaultError, Prisma.SelectSubset<T, Prisma.RaffleDeleteArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as (CheckSelect<T, Raffle, Prisma.RaffleGetPayload<T>> | undefined);
        },
    };
    return mutation;
}

export function useDeleteManyRaffle(options?: Omit<(UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.RaffleDeleteManyArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.RaffleDeleteManyArgs, DefaultError, Prisma.BatchPayload, false>('Raffle', 'DELETE', `${endpoint}/raffle/deleteMany`, metadata, options, fetch, false)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.RaffleDeleteManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.RaffleDeleteManyArgs>,
            options?: Omit<(UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.SelectSubset<T, Prisma.RaffleDeleteManyArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as Prisma.BatchPayload;
        },
    };
    return mutation;
}

export function useAggregateRaffle<TArgs extends Prisma.RaffleAggregateArgs, TQueryFnData = Prisma.GetRaffleAggregateType<TArgs>, TData = TQueryFnData, TError = DefaultError>(args: Prisma.SelectSubset<TArgs, Prisma.RaffleAggregateArgs>, options?: (Omit<UseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('Raffle', `${endpoint}/raffle/aggregate`, args, options, fetch);
}

export function useSuspenseAggregateRaffle<TArgs extends Prisma.RaffleAggregateArgs, TQueryFnData = Prisma.GetRaffleAggregateType<TArgs>, TData = TQueryFnData, TError = DefaultError>(args: Prisma.SelectSubset<TArgs, Prisma.RaffleAggregateArgs>, options?: (Omit<UseSuspenseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useSuspenseModelQuery<TQueryFnData, TData, TError>('Raffle', `${endpoint}/raffle/aggregate`, args, options, fetch);
}

export function useGroupByRaffle<TArgs extends Prisma.RaffleGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<TArgs>>, Prisma.Extends<'take', Prisma.Keys<TArgs>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? { orderBy: Prisma.RaffleGroupByArgs['orderBy'] } : { orderBy?: Prisma.RaffleGroupByArgs['orderBy'] }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<TArgs['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<TArgs['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<TArgs['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends TArgs['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True
    ? `Error: "by" must not be empty.`
    : HavingValid extends Prisma.False
    ? {
        [P in HavingFields]: P extends ByFields
        ? never
        : P extends string
        ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
        : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`,
        ]
    }[HavingFields]
    : 'take' extends Prisma.Keys<TArgs>
    ? 'orderBy' extends Prisma.Keys<TArgs>
    ? ByValid extends Prisma.True
    ? {}
    : {
        [P in OrderFields]: P extends ByFields
        ? never
        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
    }[OrderFields]
    : 'Error: If you provide "take", you also need to provide "orderBy"'
    : 'skip' extends Prisma.Keys<TArgs>
    ? 'orderBy' extends Prisma.Keys<TArgs>
    ? ByValid extends Prisma.True
    ? {}
    : {
        [P in OrderFields]: P extends ByFields
        ? never
        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
    }[OrderFields]
    : 'Error: If you provide "skip", you also need to provide "orderBy"'
    : ByValid extends Prisma.True
    ? {}
    : {
        [P in OrderFields]: P extends ByFields
        ? never
        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
    }[OrderFields], TQueryFnData = {} extends InputErrors ?
    Array<PickEnumerable<Prisma.RaffleGroupByOutputType, TArgs['by']> &
        {
            [P in ((keyof TArgs) & (keyof Prisma.RaffleGroupByOutputType))]: P extends '_count'
            ? TArgs[P] extends boolean
            ? number
            : Prisma.GetScalarType<TArgs[P], Prisma.RaffleGroupByOutputType[P]>
            : Prisma.GetScalarType<TArgs[P], Prisma.RaffleGroupByOutputType[P]>
        }
    > : InputErrors, TData = TQueryFnData, TError = DefaultError>(args: Prisma.SelectSubset<TArgs, Prisma.SubsetIntersection<TArgs, Prisma.RaffleGroupByArgs, OrderByArg> & InputErrors>, options?: (Omit<UseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('Raffle', `${endpoint}/raffle/groupBy`, args, options, fetch);
}

export function useSuspenseGroupByRaffle<TArgs extends Prisma.RaffleGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<TArgs>>, Prisma.Extends<'take', Prisma.Keys<TArgs>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? { orderBy: Prisma.RaffleGroupByArgs['orderBy'] } : { orderBy?: Prisma.RaffleGroupByArgs['orderBy'] }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<TArgs['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<TArgs['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<TArgs['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends TArgs['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True
    ? `Error: "by" must not be empty.`
    : HavingValid extends Prisma.False
    ? {
        [P in HavingFields]: P extends ByFields
        ? never
        : P extends string
        ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
        : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`,
        ]
    }[HavingFields]
    : 'take' extends Prisma.Keys<TArgs>
    ? 'orderBy' extends Prisma.Keys<TArgs>
    ? ByValid extends Prisma.True
    ? {}
    : {
        [P in OrderFields]: P extends ByFields
        ? never
        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
    }[OrderFields]
    : 'Error: If you provide "take", you also need to provide "orderBy"'
    : 'skip' extends Prisma.Keys<TArgs>
    ? 'orderBy' extends Prisma.Keys<TArgs>
    ? ByValid extends Prisma.True
    ? {}
    : {
        [P in OrderFields]: P extends ByFields
        ? never
        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
    }[OrderFields]
    : 'Error: If you provide "skip", you also need to provide "orderBy"'
    : ByValid extends Prisma.True
    ? {}
    : {
        [P in OrderFields]: P extends ByFields
        ? never
        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
    }[OrderFields], TQueryFnData = {} extends InputErrors ?
    Array<PickEnumerable<Prisma.RaffleGroupByOutputType, TArgs['by']> &
        {
            [P in ((keyof TArgs) & (keyof Prisma.RaffleGroupByOutputType))]: P extends '_count'
            ? TArgs[P] extends boolean
            ? number
            : Prisma.GetScalarType<TArgs[P], Prisma.RaffleGroupByOutputType[P]>
            : Prisma.GetScalarType<TArgs[P], Prisma.RaffleGroupByOutputType[P]>
        }
    > : InputErrors, TData = TQueryFnData, TError = DefaultError>(args: Prisma.SelectSubset<TArgs, Prisma.SubsetIntersection<TArgs, Prisma.RaffleGroupByArgs, OrderByArg> & InputErrors>, options?: (Omit<UseSuspenseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useSuspenseModelQuery<TQueryFnData, TData, TError>('Raffle', `${endpoint}/raffle/groupBy`, args, options, fetch);
}

export function useCountRaffle<TArgs extends Prisma.RaffleCountArgs, TQueryFnData = TArgs extends { select: any; } ? TArgs['select'] extends true ? number : Prisma.GetScalarType<TArgs['select'], Prisma.RaffleCountAggregateOutputType> : number, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.RaffleCountArgs>, options?: (Omit<UseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('Raffle', `${endpoint}/raffle/count`, args, options, fetch);
}

export function useSuspenseCountRaffle<TArgs extends Prisma.RaffleCountArgs, TQueryFnData = TArgs extends { select: any; } ? TArgs['select'] extends true ? number : Prisma.GetScalarType<TArgs['select'], Prisma.RaffleCountAggregateOutputType> : number, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.RaffleCountArgs>, options?: (Omit<UseSuspenseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useSuspenseModelQuery<TQueryFnData, TData, TError>('Raffle', `${endpoint}/raffle/count`, args, options, fetch);
}
import type { RaffleStatus, CurrencyType, RaffleDrawType, RaffleMaxTickets } from '@zenstackhq/runtime/models';

export function useCheckRaffle<TError = DefaultError>(args: { operation: PolicyCrudKind; where?: { id?: string; creatorId?: string; name?: string; description?: string; imageUrl?: string; status?: RaffleStatus; currency?: CurrencyType; drawType?: RaffleDrawType; maxTickets?: RaffleMaxTickets; isCharity?: boolean; charityInfo?: string; termsConditions?: string }; }, options?: (Omit<UseQueryOptions<boolean, TError, boolean>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<boolean, boolean, TError>('Raffle', `${endpoint}/raffle/check`, args, options, fetch);
}
