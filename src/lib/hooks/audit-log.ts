/* eslint-disable */
import type { Prisma, AuditLog } from "@zenstackhq/runtime/models";
import type { UseMutationOptions, UseQueryOptions, UseInfiniteQueryOptions, InfiniteData } from '@tanstack/react-query';
import { getHooksContext } from '@zenstackhq/tanstack-query/runtime-v5/react';
import { useModelQuery, useInfiniteModelQuery, useModelMutation } from '@zenstackhq/tanstack-query/runtime-v5/react';
import type { PickEnumerable, CheckSelect, QueryError, ExtraQueryOptions, ExtraMutationOptions } from '@zenstackhq/tanstack-query/runtime-v5';
import type { PolicyCrudKind } from '@zenstackhq/runtime'
import metadata from './__model_meta';
type DefaultError = QueryError;
import { useSuspenseModelQuery, useSuspenseInfiniteModelQuery } from '@zenstackhq/tanstack-query/runtime-v5/react';
import type { UseSuspenseQueryOptions, UseSuspenseInfiniteQueryOptions } from '@tanstack/react-query';

export function useCreateAuditLog(options?: Omit<(UseMutationOptions<(AuditLog | undefined), DefaultError, Prisma.AuditLogCreateArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.AuditLogCreateArgs, DefaultError, AuditLog, true>('AuditLog', 'POST', `${endpoint}/auditLog/create`, metadata, options, fetch, true)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.AuditLogCreateArgs>(
            args: Prisma.SelectSubset<T, Prisma.AuditLogCreateArgs>,
            options?: Omit<(UseMutationOptions<(CheckSelect<T, AuditLog, Prisma.AuditLogGetPayload<T>> | undefined), DefaultError, Prisma.SelectSubset<T, Prisma.AuditLogCreateArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as (CheckSelect<T, AuditLog, Prisma.AuditLogGetPayload<T>> | undefined);
        },
    };
    return mutation;
}

export function useCreateManyAuditLog(options?: Omit<(UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.AuditLogCreateManyArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.AuditLogCreateManyArgs, DefaultError, Prisma.BatchPayload, false>('AuditLog', 'POST', `${endpoint}/auditLog/createMany`, metadata, options, fetch, false)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.AuditLogCreateManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.AuditLogCreateManyArgs>,
            options?: Omit<(UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.SelectSubset<T, Prisma.AuditLogCreateManyArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as Prisma.BatchPayload;
        },
    };
    return mutation;
}

export function useFindManyAuditLog<TArgs extends Prisma.AuditLogFindManyArgs, TQueryFnData = Array<Prisma.AuditLogGetPayload<TArgs> & { $optimistic?: boolean }>, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.AuditLogFindManyArgs>, options?: (Omit<UseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('AuditLog', `${endpoint}/auditLog/findMany`, args, options, fetch);
}

export function useInfiniteFindManyAuditLog<TArgs extends Prisma.AuditLogFindManyArgs, TQueryFnData = Array<Prisma.AuditLogGetPayload<TArgs>>, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.AuditLogFindManyArgs>, options?: Omit<UseInfiniteQueryOptions<TQueryFnData, TError, InfiniteData<TData>>, 'queryKey' | 'initialPageParam'>) {
    options = options ?? { getNextPageParam: () => null };
    const { endpoint, fetch } = getHooksContext();
    return useInfiniteModelQuery<TQueryFnData, TData, TError>('AuditLog', `${endpoint}/auditLog/findMany`, args, options, fetch);
}

export function useSuspenseFindManyAuditLog<TArgs extends Prisma.AuditLogFindManyArgs, TQueryFnData = Array<Prisma.AuditLogGetPayload<TArgs> & { $optimistic?: boolean }>, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.AuditLogFindManyArgs>, options?: (Omit<UseSuspenseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useSuspenseModelQuery<TQueryFnData, TData, TError>('AuditLog', `${endpoint}/auditLog/findMany`, args, options, fetch);
}

export function useSuspenseInfiniteFindManyAuditLog<TArgs extends Prisma.AuditLogFindManyArgs, TQueryFnData = Array<Prisma.AuditLogGetPayload<TArgs>>, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.AuditLogFindManyArgs>, options?: Omit<UseSuspenseInfiniteQueryOptions<TQueryFnData, TError, InfiniteData<TData>>, 'queryKey' | 'initialPageParam'>) {
    options = options ?? { getNextPageParam: () => null };
    const { endpoint, fetch } = getHooksContext();
    return useSuspenseInfiniteModelQuery<TQueryFnData, TData, TError>('AuditLog', `${endpoint}/auditLog/findMany`, args, options, fetch);
}

export function useFindUniqueAuditLog<TArgs extends Prisma.AuditLogFindUniqueArgs, TQueryFnData = Prisma.AuditLogGetPayload<TArgs> & { $optimistic?: boolean }, TData = TQueryFnData, TError = DefaultError>(args: Prisma.SelectSubset<TArgs, Prisma.AuditLogFindUniqueArgs>, options?: (Omit<UseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('AuditLog', `${endpoint}/auditLog/findUnique`, args, options, fetch);
}

export function useSuspenseFindUniqueAuditLog<TArgs extends Prisma.AuditLogFindUniqueArgs, TQueryFnData = Prisma.AuditLogGetPayload<TArgs> & { $optimistic?: boolean }, TData = TQueryFnData, TError = DefaultError>(args: Prisma.SelectSubset<TArgs, Prisma.AuditLogFindUniqueArgs>, options?: (Omit<UseSuspenseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useSuspenseModelQuery<TQueryFnData, TData, TError>('AuditLog', `${endpoint}/auditLog/findUnique`, args, options, fetch);
}

export function useFindFirstAuditLog<TArgs extends Prisma.AuditLogFindFirstArgs, TQueryFnData = Prisma.AuditLogGetPayload<TArgs> & { $optimistic?: boolean }, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.AuditLogFindFirstArgs>, options?: (Omit<UseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('AuditLog', `${endpoint}/auditLog/findFirst`, args, options, fetch);
}

export function useSuspenseFindFirstAuditLog<TArgs extends Prisma.AuditLogFindFirstArgs, TQueryFnData = Prisma.AuditLogGetPayload<TArgs> & { $optimistic?: boolean }, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.AuditLogFindFirstArgs>, options?: (Omit<UseSuspenseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useSuspenseModelQuery<TQueryFnData, TData, TError>('AuditLog', `${endpoint}/auditLog/findFirst`, args, options, fetch);
}

export function useUpdateAuditLog(options?: Omit<(UseMutationOptions<(AuditLog | undefined), DefaultError, Prisma.AuditLogUpdateArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.AuditLogUpdateArgs, DefaultError, AuditLog, true>('AuditLog', 'PUT', `${endpoint}/auditLog/update`, metadata, options, fetch, true)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.AuditLogUpdateArgs>(
            args: Prisma.SelectSubset<T, Prisma.AuditLogUpdateArgs>,
            options?: Omit<(UseMutationOptions<(CheckSelect<T, AuditLog, Prisma.AuditLogGetPayload<T>> | undefined), DefaultError, Prisma.SelectSubset<T, Prisma.AuditLogUpdateArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as (CheckSelect<T, AuditLog, Prisma.AuditLogGetPayload<T>> | undefined);
        },
    };
    return mutation;
}

export function useUpdateManyAuditLog(options?: Omit<(UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.AuditLogUpdateManyArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.AuditLogUpdateManyArgs, DefaultError, Prisma.BatchPayload, false>('AuditLog', 'PUT', `${endpoint}/auditLog/updateMany`, metadata, options, fetch, false)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.AuditLogUpdateManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.AuditLogUpdateManyArgs>,
            options?: Omit<(UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.SelectSubset<T, Prisma.AuditLogUpdateManyArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as Prisma.BatchPayload;
        },
    };
    return mutation;
}

export function useUpsertAuditLog(options?: Omit<(UseMutationOptions<(AuditLog | undefined), DefaultError, Prisma.AuditLogUpsertArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.AuditLogUpsertArgs, DefaultError, AuditLog, true>('AuditLog', 'POST', `${endpoint}/auditLog/upsert`, metadata, options, fetch, true)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.AuditLogUpsertArgs>(
            args: Prisma.SelectSubset<T, Prisma.AuditLogUpsertArgs>,
            options?: Omit<(UseMutationOptions<(CheckSelect<T, AuditLog, Prisma.AuditLogGetPayload<T>> | undefined), DefaultError, Prisma.SelectSubset<T, Prisma.AuditLogUpsertArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as (CheckSelect<T, AuditLog, Prisma.AuditLogGetPayload<T>> | undefined);
        },
    };
    return mutation;
}

export function useDeleteAuditLog(options?: Omit<(UseMutationOptions<(AuditLog | undefined), DefaultError, Prisma.AuditLogDeleteArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.AuditLogDeleteArgs, DefaultError, AuditLog, true>('AuditLog', 'DELETE', `${endpoint}/auditLog/delete`, metadata, options, fetch, true)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.AuditLogDeleteArgs>(
            args: Prisma.SelectSubset<T, Prisma.AuditLogDeleteArgs>,
            options?: Omit<(UseMutationOptions<(CheckSelect<T, AuditLog, Prisma.AuditLogGetPayload<T>> | undefined), DefaultError, Prisma.SelectSubset<T, Prisma.AuditLogDeleteArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as (CheckSelect<T, AuditLog, Prisma.AuditLogGetPayload<T>> | undefined);
        },
    };
    return mutation;
}

export function useDeleteManyAuditLog(options?: Omit<(UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.AuditLogDeleteManyArgs> & ExtraMutationOptions), 'mutationFn'>) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation =
        useModelMutation<Prisma.AuditLogDeleteManyArgs, DefaultError, Prisma.BatchPayload, false>('AuditLog', 'DELETE', `${endpoint}/auditLog/deleteMany`, metadata, options, fetch, false)
        ;
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.AuditLogDeleteManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.AuditLogDeleteManyArgs>,
            options?: Omit<(UseMutationOptions<Prisma.BatchPayload, DefaultError, Prisma.SelectSubset<T, Prisma.AuditLogDeleteManyArgs>> & ExtraMutationOptions), 'mutationFn'>
        ) => {
            return (await _mutation.mutateAsync(
                args,
                options as any
            )) as Prisma.BatchPayload;
        },
    };
    return mutation;
}

export function useAggregateAuditLog<TArgs extends Prisma.AuditLogAggregateArgs, TQueryFnData = Prisma.GetAuditLogAggregateType<TArgs>, TData = TQueryFnData, TError = DefaultError>(args: Prisma.SelectSubset<TArgs, Prisma.AuditLogAggregateArgs>, options?: (Omit<UseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('AuditLog', `${endpoint}/auditLog/aggregate`, args, options, fetch);
}

export function useSuspenseAggregateAuditLog<TArgs extends Prisma.AuditLogAggregateArgs, TQueryFnData = Prisma.GetAuditLogAggregateType<TArgs>, TData = TQueryFnData, TError = DefaultError>(args: Prisma.SelectSubset<TArgs, Prisma.AuditLogAggregateArgs>, options?: (Omit<UseSuspenseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useSuspenseModelQuery<TQueryFnData, TData, TError>('AuditLog', `${endpoint}/auditLog/aggregate`, args, options, fetch);
}

export function useGroupByAuditLog<TArgs extends Prisma.AuditLogGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<TArgs>>, Prisma.Extends<'take', Prisma.Keys<TArgs>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? { orderBy: Prisma.AuditLogGroupByArgs['orderBy'] } : { orderBy?: Prisma.AuditLogGroupByArgs['orderBy'] }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<TArgs['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<TArgs['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<TArgs['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends TArgs['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True
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
    Array<PickEnumerable<Prisma.AuditLogGroupByOutputType, TArgs['by']> &
        {
            [P in ((keyof TArgs) & (keyof Prisma.AuditLogGroupByOutputType))]: P extends '_count'
            ? TArgs[P] extends boolean
            ? number
            : Prisma.GetScalarType<TArgs[P], Prisma.AuditLogGroupByOutputType[P]>
            : Prisma.GetScalarType<TArgs[P], Prisma.AuditLogGroupByOutputType[P]>
        }
    > : InputErrors, TData = TQueryFnData, TError = DefaultError>(args: Prisma.SelectSubset<TArgs, Prisma.SubsetIntersection<TArgs, Prisma.AuditLogGroupByArgs, OrderByArg> & InputErrors>, options?: (Omit<UseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('AuditLog', `${endpoint}/auditLog/groupBy`, args, options, fetch);
}

export function useSuspenseGroupByAuditLog<TArgs extends Prisma.AuditLogGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<TArgs>>, Prisma.Extends<'take', Prisma.Keys<TArgs>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? { orderBy: Prisma.AuditLogGroupByArgs['orderBy'] } : { orderBy?: Prisma.AuditLogGroupByArgs['orderBy'] }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<TArgs['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<TArgs['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<TArgs['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends TArgs['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True
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
    Array<PickEnumerable<Prisma.AuditLogGroupByOutputType, TArgs['by']> &
        {
            [P in ((keyof TArgs) & (keyof Prisma.AuditLogGroupByOutputType))]: P extends '_count'
            ? TArgs[P] extends boolean
            ? number
            : Prisma.GetScalarType<TArgs[P], Prisma.AuditLogGroupByOutputType[P]>
            : Prisma.GetScalarType<TArgs[P], Prisma.AuditLogGroupByOutputType[P]>
        }
    > : InputErrors, TData = TQueryFnData, TError = DefaultError>(args: Prisma.SelectSubset<TArgs, Prisma.SubsetIntersection<TArgs, Prisma.AuditLogGroupByArgs, OrderByArg> & InputErrors>, options?: (Omit<UseSuspenseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useSuspenseModelQuery<TQueryFnData, TData, TError>('AuditLog', `${endpoint}/auditLog/groupBy`, args, options, fetch);
}

export function useCountAuditLog<TArgs extends Prisma.AuditLogCountArgs, TQueryFnData = TArgs extends { select: any; } ? TArgs['select'] extends true ? number : Prisma.GetScalarType<TArgs['select'], Prisma.AuditLogCountAggregateOutputType> : number, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.AuditLogCountArgs>, options?: (Omit<UseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('AuditLog', `${endpoint}/auditLog/count`, args, options, fetch);
}

export function useSuspenseCountAuditLog<TArgs extends Prisma.AuditLogCountArgs, TQueryFnData = TArgs extends { select: any; } ? TArgs['select'] extends true ? number : Prisma.GetScalarType<TArgs['select'], Prisma.AuditLogCountAggregateOutputType> : number, TData = TQueryFnData, TError = DefaultError>(args?: Prisma.SelectSubset<TArgs, Prisma.AuditLogCountArgs>, options?: (Omit<UseSuspenseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useSuspenseModelQuery<TQueryFnData, TData, TError>('AuditLog', `${endpoint}/auditLog/count`, args, options, fetch);
}

export function useCheckAuditLog<TError = DefaultError>(args: { operation: PolicyCrudKind; where?: { id?: string; userId?: string; action?: string; details?: string; ipAddress?: string }; }, options?: (Omit<UseQueryOptions<boolean, TError, boolean>, 'queryKey'> & ExtraQueryOptions)) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<boolean, boolean, TError>('AuditLog', `${endpoint}/auditLog/check`, args, options, fetch);
}
