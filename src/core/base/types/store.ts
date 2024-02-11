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

export type GenericAction<TData = unknown, TParams extends GenericParams = GenericParams> = {
    type: string;
    payload: TData;
    params?: TParams;
};
