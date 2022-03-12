import styles from './header.module.css';
import Link from 'next/link';
import Image from 'next/image';
import Drop from '@components/logo/drop';
import { MouseEventHandler, useState } from 'react';
import { prependOnceListener } from 'process';

type TabProps = {
    url: string;
    title?: string;
    isSelected?: boolean;
    children?: React.ReactNode;
};

function Tab(props: TabProps) {
    return (
        <Link href={props.url}>
            <div className={styles.tab}>
                {props.children ? props.children : <a>{props.title}</a>}
            </div>
        </Link>
    );
}

type HeaderProps = {
    route: string;
};

export default function Header(props: HeaderProps) {
    return (
        <div className={styles.header}>
            <Tab url="/">
                <Drop width={80} height={80} />
                <h1>POOL</h1>
            </Tab>
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
