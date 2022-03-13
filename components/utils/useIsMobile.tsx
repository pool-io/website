import useWindowDimensions from '@components/utils/useWindowDimensions';

export default function useIsMobile() {
    const { width } = useWindowDimensions();
    if (width === undefined) {
        return undefined;
    }
    return width < 700;
}
