import { useState, useEffect } from 'react';

type WindowOffsets = {
    scrollX: number;
    scrollY: number;
};

function getWindowOffsets(): WindowOffsets {
    if (typeof window !== 'undefined') {
        const { scrollX, scrollY } = window;
        return {
            scrollX,
            scrollY
        };
    }
    console.log('getWindowOffsets no window');
    return {
        scrollX: undefined,
        scrollY: undefined
    };
}

export default function useWindowOffsets() {
    const [windowOffsets, setWindowOffsets] = useState(getWindowOffsets());

    useEffect(() => {
        function handleScroll() {
            setWindowOffsets(getWindowOffsets());
        }

        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return windowOffsets;
}
