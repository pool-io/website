import styles from './header.module.css';
import Link from 'next/link';
import {
    CSSProperties,
    MouseEventHandler,
    ReactNode,
    useEffect,
    useState
} from 'react';
import BurgerMenu from '@components/svg/BurgerMenu';
import Drop from '@components/svg/drop';
import Cross from '@components/svg/Cross';
import useIsMobile from '@components/utils/useIsMobile';

function Logo() {
    return (
        <Tab
            url="/"
            style={{
                flex: 1,
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
    );
}

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
        <>
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex' }}>
                    <Logo />
                    <div
                        className={styles.tab}
                        style={{
                            flex: 1,
                            display: 'flex',
                            justifyContent: 'flex-end',
                            alignItems: 'flex-start'
                        }}
                    >
                        <div onClick={onClick} style={{ padding: 25 }}>
                            {isExpanded ? (
                                <Cross width={30} height={30} color={'white'} />
                            ) : (
                                <BurgerMenu
                                    width={30}
                                    height={30}
                                    color={'white'}
                                />
                            )}
                        </div>
                    </div>
                </div>
                {isExpanded ? (
                    <div style={{ margin: 30, color: 'white' }}>
                        <Link href="/learn">
                            <h1>Learn</h1>
                        </Link>
                        <Link href="/blog">
                            <h1>Blog</h1>
                        </Link>
                        <Link href="/about">
                            <h1>About</h1>
                        </Link>
                        <Link href="/signin">
                            <h1>Sign In</h1>
                        </Link>
                    </div>
                ) : null}
            </div>
        </>
    );
}

type ExpandedTabsProps = {
    route: string;
};

function ExpandedTabs(props: ExpandedTabsProps) {
    return (
        <>
            <Logo />
            <div style={{ display: 'flex', flex: 4 }}>
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
        </>
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
            {tabs}
        </div>
    );
}
