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
                    cursor: 'pointer',
                    ...props.style
                }}
            >
                {props.children ? props.children : <a>{props.title}</a>}
            </div>
        </Link>
    );
}

type CollapsedTabsProps = {
    onExpanded: (isExpanded: boolean) => void;
};

function CollapsedTabs(props: CollapsedTabsProps) {
    const [isExpanded, setIsExpanded] = useState<boolean>(false);
    const onClick = () => {
        console.log('expand:', !isExpanded);
        setIsExpanded(!isExpanded);
        props.onExpanded(!isExpanded);
    };

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
                        <div onClick={onClick} style={{ padding: 25 }}>
                            {isExpanded ? (
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
                {isExpanded ? (
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
                        <Link href="/signin">
                            <h1>Sign In</h1>
                        </Link>
                        <Link href="/signup">
                            <h1 style={{ color: '#04b3ed' }}>Get Started</h1>
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
                />
                <Tab
                    title="BLOG"
                    url="/blog"
                    isSelected={props.route === '/blog'}
                    style={{ color: color }}
                />
                <Tab
                    title="ABOUT"
                    url="/about"
                    isSelected={props.route === '/about'}
                    style={{ color: color }}
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
                <Tab
                    title="SIGN IN"
                    url="/signin"
                    isSelected={props.route === '/signin'}
                    style={{ color: color }}
                />
                <div
                    style={{
                        display: 'flex',
                        padding: 15,
                        borderRadius: 10,
                        background: '#04b3ed'
                    }}
                >
                    <Tab
                        title="GET STARTED"
                        url="/signup"
                        isSelected={props.route === '/signup'}
                    />
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

    const DARK_BACKGROUND = 'linear-gradient(#ffffff,#f0f0f0)';
    const LIGHT_BACKGROUND = '';
    const [background, setBackground] = useState<string>(LIGHT_BACKGROUND);

    const handleExpanded = (isExpanded: boolean) => {
        if (isExpanded) {
            setBackground(DARK_BACKGROUND);
        } else if (isTop) {
            setBackground(LIGHT_BACKGROUND);
        } else {
            setBackground(DARK_BACKGROUND);
        }
    };

    useEffect(() => {
        if (isMobile) {
            setTabs(<CollapsedTabs onExpanded={handleExpanded} />);
        } else {
            setTabs(<ExpandedTabs route={props.route} />);
        }
    }, [isMobile]);

    useEffect(() => {
        if (isTop) {
            setBackground(LIGHT_BACKGROUND);
        } else {
            setBackground(DARK_BACKGROUND);
        }
    }, [isTop]);

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
