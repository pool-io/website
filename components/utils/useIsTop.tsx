import { useState, useEffect } from 'react';
import useWindowOffsets from './useWindowOffsets';

export default function useIsTop(): boolean {
    const { scrollY } = useWindowOffsets();
    if (scrollY !== undefined) {
        return scrollY <= 0;
    }
    return undefined;
}
