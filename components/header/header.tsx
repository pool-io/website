import styles from './header.module.css';
import Link from 'next/link';
import { CSSProperties, ReactNode, useEffect, useState } from 'react';
import BurgerMenu from '@components/svg/BurgerMenu';
import Drop from '@components/svg/drop';
import Cross from '@components/svg/Cross';
import useIsMobile from '@components/utils/useIsMobile';
import useIsTop from '@components/utils/useIsTop';

function Logo() {
    const isTop = useIsTop();

    const LIGHT_COLOR = 'black';
    const DARK_COLOR = 'black';
    const [color, setColor] = useState<string>();

    useEffect(() => {
        if (isTop) {
            setColor(LIGHT_COLOR);
        } else {
            setColor(DARK_COLOR);
        }
    }, [isTop]);

    return (
        <Tab
            url="/"
            style={{
                flex: 1,
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'flex-start',
                alignItems: 'flex-start'
            }}
        >
            <div style={{ width: 10 }} />
            <Drop width={80} height={80} color={color} />
            <h1 style={{ color: color }}>
                <a style={{ color: '#50a8c5' }}>POOL</a>FOLIO
            </h1>
        </Tab>
    );
}

type TabProps = {
    url: string;
    title?: string;
    isSelected?: boolean;
    children?: React.ReactNode;
    expanded?: React.ReactNode;
    style?: CSSProperties;
};

function Tab(props: TabProps) {
    const [isExpanded, setIsExpanded] = useState<boolean>(false);

    useEffect(() => {
        console.log('Tab', { isExpanded });
    }, [isExpanded]);

    return (
        <div
            style={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                ...props.style
            }}
            onMouseEnter={() => setIsExpanded(true)}
            onMouseLeave={() => setIsExpanded(false)}
        >
            <Link href={props.url}>
                <div
                    className={styles.tab}
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                        textAlign: 'center',
                        cursor: 'pointer',
                        ...props.style
                    }}
                >
                    {props.children ? props.children : <a>{props.title}</a>}
                </div>
            </Link>
            {props.expanded && isExpanded ? (
                <div
                    style={{
                        position: 'absolute',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        top: 70,
                        height: '50vh',
                        width: '50vw',
                        margin: 10,
                        color: 'black',
                        background: 'white',
                        cursor: 'pointer'
                    }}
                >
                    {props.expanded}
                </div>
            ) : null}
        </div>
    );
}

type MobileTabsProps = {
    isExpanded: boolean;
    onClick: () => void;
};

function MobileTabs(props: MobileTabsProps) {
    const isTop = useIsTop();
    const LIGHT_COLOR = 'black';
    const DARK_COLOR = 'black';
    const [color, setColor] = useState<string>();
    useEffect(() => {
        if (isTop) {
            setColor(LIGHT_COLOR);
        } else {
            setColor(DARK_COLOR);
        }
    }, [isTop]);

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
                        <div onClick={props.onClick} style={{ padding: 25 }}>
                            {props.isExpanded ? (
                                <Cross width={30} height={30} color={color} />
                            ) : (
                                <BurgerMenu
                                    width={30}
                                    height={30}
                                    color={color}
                                />
                            )}
                        </div>
                    </div>
                </div>
                {props.isExpanded ? (
                    <div style={{ margin: 30, color: color }}>
                        <Link href="/learn">
                            <h1>Learn</h1>
                        </Link>
                        <Link href="/blog">
                            <h1>Blog</h1>
                        </Link>
                        <Link href="/about">
                            <h1>About</h1>
                        </Link>
                        <Link href="/portal">
                            <h1>Sign In</h1>
                        </Link>
                        <Link href="/portal?signup">
                            <h1 style={{ color: '#04b3ed' }}>Get Started</h1>
                        </Link>
                    </div>
                ) : null}
            </div>
        </>
    );
}

type DesktopTabsProps = {
    route: string;
};

function DesktopTabs(props: DesktopTabsProps) {
    const isTop = useIsTop();
    const LIGHT_COLOR = 'black';
    const DARK_COLOR = 'black';
    const [color, setColor] = useState<string>();
    useEffect(() => {
        if (isTop) {
            setColor(LIGHT_COLOR);
        } else {
            setColor(DARK_COLOR);
        }
    }, [isTop]);

    function Spacer() {
        return <div style={{ flex: 0.5 }} />;
    }

    const ExpandedLearn = (
        <>
            <h1>learn</h1>
        </>
    );

    const ExpandedBlog = (
        <>
            <h1>blog</h1>
        </>
    );

    const ExpandedAbout = (
        <>
            <h1>Meet the Team Members</h1>
            <Link href="/soungbaekim">
                <p>Soung Bae Kim</p>
            </Link>

            <Link href="/caleb">
                <p>Caleb</p>
            </Link>

            <Link href="/bralley">
                <p>BR Alley</p>
            </Link>
        </>
    );

    return (
        <>
            <Logo />
            <div
                style={{
                    display: 'flex',
                    flex: 1
                }}
            >
                <Spacer />
                <Tab
                    title="LEARN"
                    url="/learn"
                    isSelected={props.route === '/learn'}
                    style={{ color: color }}
                    expanded={ExpandedLearn}
                />
                <Tab
                    title="BLOG"
                    url="/blog"
                    isSelected={props.route === '/blog'}
                    style={{ color: color }}
                    expanded={ExpandedBlog}
                />
                <Tab
                    title="ABOUT"
                    url="/about"
                    isSelected={props.route === '/about'}
                    style={{ color: color }}
                    expanded={ExpandedAbout}
                />
                <Spacer />
            </div>
            <div
                style={{
                    flex: 1,
                    display: 'flex',
                    alignItems: 'center'
                }}
            >
                <Spacer />
                <Tab title="SIGN IN" url="/portal" style={{ color: color }} />
                <div
                    style={{
                        display: 'flex',
                        padding: 15,
                        borderRadius: 10,
                        background: '#04b3ed'
                    }}
                >
                    <Tab title="GET STARTED" url="/portal?signup" />
                </div>
                <Spacer />
            </div>
        </>
    );
}

type HeaderProps = {
    route: string;
};

export default function Header(props: HeaderProps) {
    const isMobile = useIsMobile();
    const isTop = useIsTop();

    const [tabs, setTabs] = useState<ReactNode>(null);
    const [isExpanded, setIsExpanded] = useState<boolean>(false);

    const DARK_BACKGROUND = 'linear-gradient(#ffffff,#f0f0f0)';
    const LIGHT_BACKGROUND = '';
    const [background, setBackground] = useState<string>(LIGHT_BACKGROUND);

    useEffect(() => {
        if (isMobile) {
            setTabs(
                <MobileTabs
                    isExpanded={isExpanded}
                    onClick={() => setIsExpanded(!isExpanded)}
                />
            );
        } else {
            setTabs(<DesktopTabs route={props.route} />);
        }
    }, [isMobile, isExpanded]);

    useEffect(() => {
        if (isExpanded) {
            setBackground(DARK_BACKGROUND);
        } else if (isTop) {
            setBackground(LIGHT_BACKGROUND);
        } else {
            setBackground(DARK_BACKGROUND);
        }
    }, [isTop, isExpanded]);

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'stretch',
                width: '100vw',
                position: 'fixed',
                top: 0,
                left: 0,
                backgroundImage: background
            }}
        >
            {tabs}
        </div>
    );
}
