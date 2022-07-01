import { CSSProperties, ReactNode, useEffect, useState } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import BurgerMenu from '@components/BurgerMenu';
import Drop from '@components/Drop';
import Cross from '@components/Cross';
import useIsMobile from '@hooks/useIsMobile';
import useIsTop from '@hooks/useIsTop';
import { builtinModules } from 'module';
import useAuthUser from '@hooks/useAuthUser';
import { useQuery } from '@apollo/client';
import { QUERY_GET_USER } from 'graphql/user';
import { SignOutButton } from './Auth';

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

function Username() {
    const { loading, error, data } = useQuery(QUERY_GET_USER);

    if (loading) {
        return <div>Loading</div>;
    }

    if (error) {
        console.log(error);
        return <div>Error</div>;
    }
    return (
        <div
            style={{
                cursor: 'pointer'
            }}
        >
            <Link href="/u">
                {loading ? <p>Loading</p> : <p>u/{data?.user?.username}</p>}
            </Link>
        </div>
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
                        position: 'fixed',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        top: 70,
                        borderRadius: 30,
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

function AuthTab() {
    const authUser = useAuthUser();

    return authUser ? (
        <Tab
            url="/u"
            expanded={
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: 100,
                        width: 200
                    }}
                >
                    <Link href="/settings/profile">
                        <p>Edit Profile</p>
                    </Link>
                    <SignOutButton />
                </div>
            }
        >
            <Username />
        </Tab>
    ) : (
        <>
            <Tab title="SIGN IN" url="/portal" style={{ color: 'black' }} />
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
        <div
            style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-around',
                margin: 10
            }}
        >
            <Link href="/learn">
                <h1
                    style={{
                        cursor: 'pointer',
                        fontSize: 20,
                        fontStyle: 'normal'
                    }}
                >
                    Learn
                </h1>
            </Link>
        </div>
    );

    const ExpandedBlog = (
        <div
            style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-around',
                margin: 10
            }}
        >
            <Link href="/blog">
                <h1
                    style={{
                        cursor: 'pointer',
                        fontSize: 20,
                        fontFamily: 'FoundersGrotesk'
                    }}
                >
                    Blog
                </h1>
            </Link>
        </div>
    );

    const ExpandedAbout = (
        <div
            style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-around'
                // height: '32vh',
                // width: '70vw'
            }}
        >
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    paddingRight: 20,
                    paddingLeft: 20
                }}
            >
                <h1>Meet the Team Members</h1>
                <Link href="/about/soungbaekim">
                    <p>Soung Bae Kim</p>
                </Link>

                <Link href="/about/caleb">
                    <p>Caleb</p>
                </Link>

                <Link href="https://www.youtube.com/watch?v=eN5mG_yMDiM">
                    <p>BR Alley</p>
                </Link>

                <Link href="/about/austin">
                    <p>Austin</p>
                </Link>
                <Link href="/about/samuelyoon">
                    <p>Samuel Yoon</p>
                </Link>
            </div>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    paddingLeft: 20,
                    paddingRight: 20
                }}
            >
                <h1>Why Use Pool?</h1>
                <Link href="/about/pitch">
                    <p>Pitch</p>
                </Link>
            </div>
        </div>
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
                <Search />
            </div>
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
                    display: 'flex'
                }}
            >
                <AuthTab />
            </div>
        </>
    );
}

function Search() {
    return (
        <div
            style={{
                width: '20vw',
                paddingLeft: 20,
                margin: 20,
                borderRadius: 10,
                background: 'lightgrey'
            }}
        >
            <p>Search</p>
        </div>
    );
}

type HeaderProps = {
    route: string;
};

function Header(props: HeaderProps) {
    const isMobile = useIsMobile();
    const isTop = useIsTop();

    const [tabs, setTabs] = useState<ReactNode>(null);
    const [isExpanded, setIsExpanded] = useState<boolean>(false);

    const DARK_BACKGROUND = 'linear-gradient(#ffffff,#f0f0f0)';
    const LIGHT_BACKGROUND = '';

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
                backgroundImage: isExpanded
                    ? DARK_BACKGROUND
                    : isTop
                    ? LIGHT_BACKGROUND
                    : DARK_BACKGROUND
            }}
        >
            {tabs}
        </div>
    );
}

export default dynamic(() => Promise.resolve(Header), {
    ssr: false
});
