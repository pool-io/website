import { useState, useEffect } from 'react';
import useIsMobile from './useIsMobile';
import useWindowOffsets from './useWindowOffsets';

export default function useIsTop(): boolean {
    const isMobile = useIsMobile();

    const { scrollY } = useWindowOffsets();
    if (scrollY !== undefined) {
        return scrollY <= (isMobile ? 30 : 100);
    }
    return undefined;
}
