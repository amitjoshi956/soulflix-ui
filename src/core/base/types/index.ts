import { ApiStatus } from 'core/base/enums';

export type GenericParams = {
    limit: number;
    offset: number;
};

export type GenericState<TData = unknown, TParams extends GenericParams = GenericParams> = {
    data: TData;
    status: ApiStatus;
    params?: TParams;
};
