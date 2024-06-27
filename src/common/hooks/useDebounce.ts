import { useEffect, useState } from 'react';

export const useDebounce = <T>(value: T, delay = 500) => {
    const [debouncedValue, setDebouncedValue] = useState<T>(value);

    useEffect(() => {
        const timer = setTimeout(() => setDebouncedValue(value), delay);

        return () => clearTimeout(timer);
    }, [debouncedValue, delay]);

    return debouncedValue;
};
