export const useDebounce = (timeInMillis: number) => {
    return (callback: () => void) => {
        setTimeout(callback, timeInMillis);
    };
};
