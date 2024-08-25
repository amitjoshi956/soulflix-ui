import { useEffect, useState } from 'react';
import { useDebounceFn } from 'common/hooks';

export const useIdle = (idleTime = 5000) => {
    const [isIdle, setIsIdle] = useState<boolean>(false);
    const { debouncedFn } = useDebounceFn();

    const onActivity = () => {
        setIsIdle(false);
    };

    useEffect(() => {
        if (!isIdle) {
            debouncedFn(() => {
                setIsIdle(true);
                window.focus();
            }, idleTime);
        }

        return () => {
            window.removeEventListener('mousemove', onActivity);
            window.removeEventListener('keyup', onActivity);
        };
    }, [isIdle]);

    window.addEventListener('mousemove', onActivity);
    window.addEventListener('keyup', onActivity);

    return { isIdle };
};
