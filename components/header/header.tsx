import styles from './header.module.css';
import Link from 'next/link';
import Drop from '@components/svg/drop';
import { CSSProperties, MouseEventHandler, useState } from 'react';
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
                style={
                    props.isSelected
                        ? { color: 'pink', ...props.style }
                        : { ...props.style }
                }
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
            onClick={onClick}
            style={{
                justifyContent: 'flex-end',
                alignItems: 'flex-start',
                margin: '30px',
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
                    <BurgerMenu width={30} height={30} color="black" />
                </>
            ) : (
                <>
                    <div style={{ width: '30vw' }} />
                    <BurgerMenu width={30} height={30} color="white" />
                </>
            )}
        </div>
    );
}

type HeaderProps = {
    route: string;
};

export default function Header(props: HeaderProps) {
    const isMobile = useIsMobile();

    const tabs = isMobile ? (
        <CollapsedTabs />
    ) : (
        <>
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
        </>
    );

    return (
        <div className={styles.header}>
            <Tab
                url="/"
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    justifyContent: 'flex-start',
                    marginLeft: '10px',
                    alignItems: 'flex-start'
                }}
            >
                <Drop width={80} height={80} />
                <h1>POOL</h1>
            </Tab>
            {tabs}
        </div>
    );
}
