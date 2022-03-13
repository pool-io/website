import styles from './header.module.css';
import Link from 'next/link';
import Image from 'next/image';
import Drop from '@components/logo/drop';
import { MouseEventHandler, useState } from 'react';
import { prependOnceListener } from 'process';
import useWindowDimensions from '@components/utils/useWindowDimensions';

function useIsMobile() {
    const { width } = useWindowDimensions();
    return width < 655;
}

type TabProps = {
    url: string;
    title?: string;
    isSelected?: boolean;
    children?: React.ReactNode;
};

function Tab(props: TabProps) {
    return (
        <Link href={props.url}>
            <div
                className={styles.tab}
                style={props.isSelected ? { color: 'pink' } : {}}
            >
                {props.children ? props.children : <a>{props.title}</a>}
            </div>
        </Link>
    );
}

type HeaderProps = {
    route: string;
};

export default function Header(props: HeaderProps) {
    const isMobile = useIsMobile();

    const tabs = isMobile ? (
        <h1>Hello</h1>
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
            <Tab url="/">
                <Drop width={80} height={80} />
                <h1>POOL</h1>
            </Tab>
            {tabs}
        </div>
    );
}
