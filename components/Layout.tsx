import Head from 'next/head';
import Header from '@components/Header';
import useAuthUser from '@hooks/useAuthUser';
import { CSSProperties } from 'react';
import Link from 'next/link';

type LayoutProps = {
    style?: CSSProperties;
    isHideSidebar?: boolean;
    children: React.ReactNode;
    header?: React.ReactNode;
};

export default function Layout(props: LayoutProps) {
    return (
        <>
            <Head>
                <title>POOL</title>
                <link
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                    href="/images/favicon.png"
                />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@700&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'stretch',
                    background: '#f0f0f0',
                    height: '100vh',
                    width: '100vw',
                    overflow: 'auto'
                }}
            >
                <div
                    style={{
                        flex: 1,
                        paddingTop: 50,
                        display: 'flex',
                        flexDirection: 'row'
                    }}
                >
                    {props.isHideSidebar ? null : <Sidebar />}
                    <div
                        style={{
                            flex: 1,
                            ...props.style
                        }}
                    >
                        {props.children}
                    </div>
                </div>
            </div>
            {/* Header is placed at the bottom so that it will be rendered at the top */}
            {props.header ? props.header : <Header />}
        </>
    );
}

function Sidebar() {
    const LABELS = [
        'Dashboards',
        'Feed',
        'Pools',
        'Transactions',
        'Tanks',
        'Drains',
        'Plaid'
    ];

    return (
        <div
            style={{
                width: 150,
                background: '#cedbe7'
            }}
        >
            {LABELS.map((label: string) => {
                return (
                    <Link key={label} href={`/${label.toLowerCase()}`}>
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'flex-start',
                                alignItems: 'center',
                                padding: 10,
                                cursor: 'pointer'
                            }}
                        >
                            <p>{label}</p>
                        </div>
                    </Link>
                );
            })}
        </div>
    );
}
