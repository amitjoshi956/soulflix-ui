export type GenericApiResponse<TData = unknown> = {
    data: TData;
    hasError?: boolean;
    errorMessage?: string;
};
