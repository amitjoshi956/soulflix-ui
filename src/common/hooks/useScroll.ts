// a hook to identify the scroll position
import { useEffect, useState } from 'react';

export const useScroll = () => {
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        const updatePosition = () => {
            const position = window.pageYOffset || document.documentElement.scrollTop;
            setScrollPosition(position);
        };

        window.addEventListener('scroll', updatePosition);
        updatePosition();

        return () => window.removeEventListener('scroll', updatePosition);
    }, []);

    return scrollPosition;
};
