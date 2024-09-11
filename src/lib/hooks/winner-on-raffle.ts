/* eslint-disable */
import type { Prisma, WinnerOnRaffle } from "@zenstackhq/runtime/models";
import type { UseMutationOptions, UseQueryOptions, UseInfiniteQueryOptions, InfiniteData } from '@tanstack/react-query';
import { getHooksContext } from '@zenstackhq/tanstack-query/runtime-v5/react';
import { useModelQuery, useInfiniteModelQuery, useModelMutation } from '@zenstackhq/tanstack-query/runtime-v5/react';
import type { PickEnumerable, CheckSelect, QueryError, ExtraQueryOptions, ExtraMutationOptions } from '@zenstackhq/tanstack-query/runtime-v5';
import type { PolicyCrudKind } from '@zenstackhq/runtime'
import metadata from './__model_meta';
type DefaultError = QueryError;
import { useSuspenseModelQuery, useSuspenseInfiniteModelQuery } from '@zenstackhq/tanstack-query/runtime-v5/react';
import type { UseSuspenseQueryOptions, UseSuspenseInfiniteQueryOptions } from '@tanstack/react-query';

export function useCreateWinnerOnRaffle(options?: Omit<(UseMutationOptions<(WinnerOnRaffle | undefined), DefaultError, Prisma.WinnerOnRaffleCreateArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.WinnerOnRaffleCreateArgs, DefaultError, WinnerOnRaffle, true>('WinnerOnRaffle', 'POST', `${endpoint}/winnerOnRaffle/create`, metadata, options, fetch, true)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.WinnerOnRaffleCreateArgs>(
            args: Prisma.SelectSubset<T, Prisma.WinnerOnRaffleCreateArgs>,
            options?: Omit<(UseMutationOptions<(CheckSelect<T, WinnerOnRaffle, Prisma.WinnerOnRaffleGetPayload<T>> | undefined), DefaultError, Prisma.SelectSubset<T, Prisma.WinnerOnRaffleCreateArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as (CheckSelect<T, WinnerOnRaffle, Prisma.WinnerOnRaffleGetPayload<T>> | undefined);
        },
    };
    return mutation;
}

export function useCreateManyWinnerOnRaffle(options?: Omit<(UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.WinnerOnRaffleCreateManyArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.WinnerOnRaffleCreateManyArgs, DefaultError, Prisma.BatchPayload, false>('WinnerOnRaffle', 'POST', `${endpoint}/winnerOnRaffle/createMany`, metadata, options, fetch, false)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.WinnerOnRaffleCreateManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.WinnerOnRaffleCreateManyArgs>,
            options?: Omit<(UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.SelectSubset<T, Prisma.WinnerOnRaffleCreateManyArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as Prisma.BatchPayload;
        },
    };
    return mutation;
}

export function useFindManyWinnerOnRaffle<TArgs extends Prisma.WinnerOnRaffleFindManyArgs, TQueryFnData = Array<Prisma.WinnerOnRaffleGetPayload<TArgs> & { $optimistic?: boolean }>, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.WinnerOnRaffleFindManyArgs>, options?: (Omit<UseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('WinnerOnRaffle', `${endpoint}/winnerOnRaffle/findMany`, args, options, fetch);
}

export function useInfiniteFindManyWinnerOnRaffle<TArgs extends Prisma.WinnerOnRaffleFindManyArgs, TQueryFnData = Array<Prisma.WinnerOnRaffleGetPayload<TArgs>>, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.WinnerOnRaffleFindManyArgs>, options?: Omit<UseInfiniteQueryOptions<TQueryFnData, TError, InfiniteData<TData>>, 'queryKey' | 'initialPageParam'>) {
    options = options ?? { getNextPageParam: () => null };
    const { endpoint, fetch } = getHooksContext();
    return useInfiniteModelQuery<TQueryFnData, TData, TError>('WinnerOnRaffle', `${endpoint}/winnerOnRaffle/findMany`, args, options, fetch);
}

export function useSuspenseFindManyWinnerOnRaffle<TArgs extends Prisma.WinnerOnRaffleFindManyArgs, TQueryFnData = Array<Prisma.WinnerOnRaffleGetPayload<TArgs> & { $optimistic?: boolean }>, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.WinnerOnRaffleFindManyArgs>, options?: (Omit<UseSuspenseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useSuspenseModelQuery<TQueryFnData, TData, TError>('WinnerOnRaffle', `${endpoint}/winnerOnRaffle/findMany`, args, options, fetch);
}

export function useSuspenseInfiniteFindManyWinnerOnRaffle<TArgs extends Prisma.WinnerOnRaffleFindManyArgs, TQueryFnData = Array<Prisma.WinnerOnRaffleGetPayload<TArgs>>, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.WinnerOnRaffleFindManyArgs>, options?: Omit<UseSuspenseInfiniteQueryOptions<TQueryFnData, TError, InfiniteData<TData>>, 'queryKey' | 'initialPageParam'>) {
    options = options ?? { getNextPageParam: () => null };
    const { endpoint, fetch } = getHooksContext();
    return useSuspenseInfiniteModelQuery<TQueryFnData, TData, TError>('WinnerOnRaffle', `${endpoint}/winnerOnRaffle/findMany`, args, options, fetch);
}

export function useFindUniqueWinnerOnRaffle<TArgs extends Prisma.WinnerOnRaffleFindUniqueArgs, TQueryFnData = Prisma.WinnerOnRaffleGetPayload<TArgs> & { $optimistic?: boolean }, TData = TQueryFnData, TError = DefaultError>(args: Prisma.SelectSubset<TArgs, Prisma.WinnerOnRaffleFindUniqueArgs>, options?: (Omit<UseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('WinnerOnRaffle', `${endpoint}/winnerOnRaffle/findUnique`, args, options, fetch);
}

export function useSuspenseFindUniqueWinnerOnRaffle<TArgs extends Prisma.WinnerOnRaffleFindUniqueArgs, TQueryFnData = Prisma.WinnerOnRaffleGetPayload<TArgs> & { $optimistic?: boolean }, TData = TQueryFnData, TError = DefaultError>(args: Prisma.SelectSubset<TArgs, Prisma.WinnerOnRaffleFindUniqueArgs>, options?: (Omit<UseSuspenseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useSuspenseModelQuery<TQueryFnData, TData, TError>('WinnerOnRaffle', `${endpoint}/winnerOnRaffle/findUnique`, args, options, fetch);
}

export function useFindFirstWinnerOnRaffle<TArgs extends Prisma.WinnerOnRaffleFindFirstArgs, TQueryFnData = Prisma.WinnerOnRaffleGetPayload<TArgs> & { $optimistic?: boolean }, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.WinnerOnRaffleFindFirstArgs>, options?: (Omit<UseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('WinnerOnRaffle', `${endpoint}/winnerOnRaffle/findFirst`, args, options, fetch);
}

export function useSuspenseFindFirstWinnerOnRaffle<TArgs extends Prisma.WinnerOnRaffleFindFirstArgs, TQueryFnData = Prisma.WinnerOnRaffleGetPayload<TArgs> & { $optimistic?: boolean }, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.WinnerOnRaffleFindFirstArgs>, options?: (Omit<UseSuspenseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useSuspenseModelQuery<TQueryFnData, TData, TError>('WinnerOnRaffle', `${endpoint}/winnerOnRaffle/findFirst`, args, options, fetch);
}

export function useUpdateWinnerOnRaffle(options?: Omit<(UseMutationOptions<(WinnerOnRaffle | undefined), DefaultError, Prisma.WinnerOnRaffleUpdateArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.WinnerOnRaffleUpdateArgs, DefaultError, WinnerOnRaffle, true>('WinnerOnRaffle', 'PUT', `${endpoint}/winnerOnRaffle/update`, metadata, options, fetch, true)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.WinnerOnRaffleUpdateArgs>(
            args: Prisma.SelectSubset<T, Prisma.WinnerOnRaffleUpdateArgs>,
            options?: Omit<(UseMutationOptions<(CheckSelect<T, WinnerOnRaffle, Prisma.WinnerOnRaffleGetPayload<T>> | undefined), DefaultError, Prisma.SelectSubset<T, Prisma.WinnerOnRaffleUpdateArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as (CheckSelect<T, WinnerOnRaffle, Prisma.WinnerOnRaffleGetPayload<T>> | undefined);
        },
    };
    return mutation;
}

export function useUpdateManyWinnerOnRaffle(options?: Omit<(UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.WinnerOnRaffleUpdateManyArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.WinnerOnRaffleUpdateManyArgs, DefaultError, Prisma.BatchPayload, false>('WinnerOnRaffle', 'PUT', `${endpoint}/winnerOnRaffle/updateMany`, metadata, options, fetch, false)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.WinnerOnRaffleUpdateManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.WinnerOnRaffleUpdateManyArgs>,
            options?: Omit<(UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.SelectSubset<T, Prisma.WinnerOnRaffleUpdateManyArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as Prisma.BatchPayload;
        },
    };
    return mutation;
}

export function useUpsertWinnerOnRaffle(options?: Omit<(UseMutationOptions<(WinnerOnRaffle | undefined), DefaultError, Prisma.WinnerOnRaffleUpsertArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.WinnerOnRaffleUpsertArgs, DefaultError, WinnerOnRaffle, true>('WinnerOnRaffle', 'POST', `${endpoint}/winnerOnRaffle/upsert`, metadata, options, fetch, true)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.WinnerOnRaffleUpsertArgs>(
            args: Prisma.SelectSubset<T, Prisma.WinnerOnRaffleUpsertArgs>,
            options?: Omit<(UseMutationOptions<(CheckSelect<T, WinnerOnRaffle, Prisma.WinnerOnRaffleGetPayload<T>> | undefined), DefaultError, Prisma.SelectSubset<T, Prisma.WinnerOnRaffleUpsertArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as (CheckSelect<T, WinnerOnRaffle, Prisma.WinnerOnRaffleGetPayload<T>> | undefined);
        },
    };
    return mutation;
}

export function useDeleteWinnerOnRaffle(options?: Omit<(UseMutationOptions<(WinnerOnRaffle | undefined), DefaultError, Prisma.WinnerOnRaffleDeleteArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.WinnerOnRaffleDeleteArgs, DefaultError, WinnerOnRaffle, true>('WinnerOnRaffle', 'DELETE', `${endpoint}/winnerOnRaffle/delete`, metadata, options, fetch, true)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.WinnerOnRaffleDeleteArgs>(
            args: Prisma.SelectSubset<T, Prisma.WinnerOnRaffleDeleteArgs>,
            options?: Omit<(UseMutationOptions<(CheckSelect<T, WinnerOnRaffle, Prisma.WinnerOnRaffleGetPayload<T>> | undefined), DefaultError, Prisma.SelectSubset<T, Prisma.WinnerOnRaffleDeleteArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as (CheckSelect<T, WinnerOnRaffle, Prisma.WinnerOnRaffleGetPayload<T>> | undefined);
        },
    };
    return mutation;
}

export function useDeleteManyWinnerOnRaffle(options?: Omit<(UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.WinnerOnRaffleDeleteManyArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.WinnerOnRaffleDeleteManyArgs, DefaultError, Prisma.BatchPayload, false>('WinnerOnRaffle', 'DELETE', `${endpoint}/winnerOnRaffle/deleteMany`, metadata, options, fetch, false)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.WinnerOnRaffleDeleteManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.WinnerOnRaffleDeleteManyArgs>,
            options?: Omit<(UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.SelectSubset<T, Prisma.WinnerOnRaffleDeleteManyArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as Prisma.BatchPayload;
        },
    };
    return mutation;
}

export function useAggregateWinnerOnRaffle<TArgs extends Prisma.WinnerOnRaffleAggregateArgs, TQueryFnData = Prisma.GetWinnerOnRaffleAggregateType<TArgs>, TData = TQueryFnData, TError = DefaultError>(args: Prisma.SelectSubset<TArgs, Prisma.WinnerOnRaffleAggregateArgs>, options?: (Omit<UseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('WinnerOnRaffle', `${endpoint}/winnerOnRaffle/aggregate`, args, options, fetch);
}

export function useSuspenseAggregateWinnerOnRaffle<TArgs extends Prisma.WinnerOnRaffleAggregateArgs, TQueryFnData = Prisma.GetWinnerOnRaffleAggregateType<TArgs>, TData = TQueryFnData, TError = DefaultError>(args: Prisma.SelectSubset<TArgs, Prisma.WinnerOnRaffleAggregateArgs>, options?: (Omit<UseSuspenseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useSuspenseModelQuery<TQueryFnData, TData, TError>('WinnerOnRaffle', `${endpoint}/winnerOnRaffle/aggregate`, args, options, fetch);
}

export function useGroupByWinnerOnRaffle<TArgs extends Prisma.WinnerOnRaffleGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<TArgs>>, Prisma.Extends<'take', Prisma.Keys<TArgs>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? { orderBy: Prisma.WinnerOnRaffleGroupByArgs['orderBy'] } : { orderBy?: Prisma.WinnerOnRaffleGroupByArgs['orderBy'] }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<TArgs['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<TArgs['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<TArgs['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends TArgs['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True
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
    Array<PickEnumerable<Prisma.WinnerOnRaffleGroupByOutputType, TArgs['by']> &
        {
            [P in ((keyof TArgs) & (keyof Prisma.WinnerOnRaffleGroupByOutputType))]: P extends '_count'
            ? TArgs[P] extends boolean
            ? number
            : Prisma.GetScalarType<TArgs[P], Prisma.WinnerOnRaffleGroupByOutputType[P]>
            : Prisma.GetScalarType<TArgs[P], Prisma.WinnerOnRaffleGroupByOutputType[P]>
        }
    > : InputErrors, TData = TQueryFnData, TError = DefaultError>(args: Prisma.SelectSubset<TArgs, Prisma.SubsetIntersection<TArgs, Prisma.WinnerOnRaffleGroupByArgs, OrderByArg> & InputErrors>, options?: (Omit<UseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('WinnerOnRaffle', `${endpoint}/winnerOnRaffle/groupBy`, args, options, fetch);
}

export function useSuspenseGroupByWinnerOnRaffle<TArgs extends Prisma.WinnerOnRaffleGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<TArgs>>, Prisma.Extends<'take', Prisma.Keys<TArgs>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? { orderBy: Prisma.WinnerOnRaffleGroupByArgs['orderBy'] } : { orderBy?: Prisma.WinnerOnRaffleGroupByArgs['orderBy'] }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<TArgs['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<TArgs['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<TArgs['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends TArgs['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True
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
    Array<PickEnumerable<Prisma.WinnerOnRaffleGroupByOutputType, TArgs['by']> &
        {
            [P in ((keyof TArgs) & (keyof Prisma.WinnerOnRaffleGroupByOutputType))]: P extends '_count'
            ? TArgs[P] extends boolean
            ? number
            : Prisma.GetScalarType<TArgs[P], Prisma.WinnerOnRaffleGroupByOutputType[P]>
            : Prisma.GetScalarType<TArgs[P], Prisma.WinnerOnRaffleGroupByOutputType[P]>
        }
    > : InputErrors, TData = TQueryFnData, TError = DefaultError>(args: Prisma.SelectSubset<TArgs, Prisma.SubsetIntersection<TArgs, Prisma.WinnerOnRaffleGroupByArgs, OrderByArg> & InputErrors>, options?: (Omit<UseSuspenseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useSuspenseModelQuery<TQueryFnData, TData, TError>('WinnerOnRaffle', `${endpoint}/winnerOnRaffle/groupBy`, args, options, fetch);
}

export function useCountWinnerOnRaffle<TArgs extends Prisma.WinnerOnRaffleCountArgs, TQueryFnData = TArgs extends { select: any; } ? TArgs['select'] extends true ? number : Prisma.GetScalarType<TArgs['select'], Prisma.WinnerOnRaffleCountAggregateOutputType> : number, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.WinnerOnRaffleCountArgs>, options?: (Omit<UseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('WinnerOnRaffle', `${endpoint}/winnerOnRaffle/count`, args, options, fetch);
}

export function useSuspenseCountWinnerOnRaffle<TArgs extends Prisma.WinnerOnRaffleCountArgs, TQueryFnData = TArgs extends { select: any; } ? TArgs['select'] extends true ? number : Prisma.GetScalarType<TArgs['select'], Prisma.WinnerOnRaffleCountAggregateOutputType> : number, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.WinnerOnRaffleCountArgs>, options?: (Omit<UseSuspenseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useSuspenseModelQuery<TQueryFnData, TData, TError>('WinnerOnRaffle', `${endpoint}/winnerOnRaffle/count`, args, options, fetch);
}

export function useCheckWinnerOnRaffle<TError = DefaultError>(args: { operation: PolicyCrudKind; where?: { id?: string; prizeId?: string; raffleId?: string; winnerId?: string }; }, options?: (Omit<UseQueryOptions<boolean, TError, boolean>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<boolean, boolean, TError>('WinnerOnRaffle', `${endpoint}/winnerOnRaffle/check`, args, options, fetch);
}
