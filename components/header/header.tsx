import styles from './header.module.css';
import Link from 'next/link';
import Drop from '@components/svg/drop';
import {
    CSSProperties,
    MouseEventHandler,
    ReactNode,
    useEffect,
    useState
} from 'react';
import BurgerMenu from '@components/svg/BurgerMenu';
import useIsMobile from '@components/utils/useIsMobile';

type TabProps = {
    url: string;
    title?: string;
    isSelected?: boolean;
    children?: React.ReactNode;
    style?: CSSProperties;
};

function Tab(props: TabProps) {
    return (
        <Link href={props.url}>
            <div
                className={styles.tab}
                style={{
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center',
                    ...props.style
                }}
            >
                {props.children ? props.children : <a>{props.title}</a>}
            </div>
        </Link>
    );
}

function CollapsedTabs() {
    const [isExpanded, setIsExpanded] = useState<boolean>(false);

    const onClick = () => {
        console.log('expand:', !isExpanded);
        setIsExpanded(!isExpanded);
    };

    return (
        <div
            className={styles.tab}
            style={{
                flex: 1,
                display: 'flex',
                justifyContent: 'flex-end',
                alignItems: 'flex-start',
                background: isExpanded ? 'white' : null
            }}
        >
            {isExpanded ? (
                <>
                    <div
                        style={{
                            width: '30vw',
                            height: '100vh',
                            background: 'white'
                        }}
                    />
                    <div
                        onClick={onClick}
                        style={{ background: 'green', padding: 20 }}
                    >
                        <BurgerMenu width={30} height={30} color="black" />
                    </div>{' '}
                </>
            ) : (
                <div onClick={onClick} style={{ padding: 25 }}>
                    <BurgerMenu width={30} height={30} color="white" />
                </div>
            )}
        </div>
    );
}

type ExpandedTabsProps = {
    route: string;
};

function ExpandedTabs(props: ExpandedTabsProps) {
    return (
        <div style={{ display: 'flex', flex: 4, background: 'red' }}>
            <Tab
                title="Learn"
                url="/learn"
                isSelected={props.route === '/learn'}
            />
            <Tab
                title="Blog"
                url="/blog"
                isSelected={props.route === '/blog'}
            />
            <Tab
                title="About"
                url="/about"
                isSelected={props.route === '/about'}
            />
            <Tab
                title="Sign In"
                url="/signin"
                isSelected={props.route === '/signin'}
            />
        </div>
    );
}

type HeaderProps = {
    route: string;
};

export default function Header(props: HeaderProps) {
    const isMobile = useIsMobile();
    const [tabs, setTabs] = useState<ReactNode>(null);

    useEffect(() => {
        if (isMobile) {
            setTabs(<CollapsedTabs />);
        } else {
            setTabs(<ExpandedTabs route={props.route} />);
        }
    }, [isMobile]);

    return (
        <div
            className={styles.header}
            style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'stretch',
                width: '100vw',
                position: 'fixed',
                top: 0,
                left: 0
            }}
        >
            {/* <div style={{ position: 'fixed' }}> */}
            <Tab
                url="/"
                style={{
                    flex: 0,
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start'
                    // background: 'yellow'
                }}
            >
                <Drop width={80} height={80} />
                <h1>POOL</h1>
            </Tab>
            {/* </div> */}
            {tabs}
        </div>
    );
}
