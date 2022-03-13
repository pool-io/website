import useWindowDimensions from '@components/utils/useWindowDimensions';

export default function useIsMobile() {
    const { width } = useWindowDimensions();
    return width < 655;
}
