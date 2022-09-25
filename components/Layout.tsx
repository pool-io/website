import Head from 'next/head';
import Header from '@components/Header';
import useAuthUser from '@hooks/useAuthUser';
import { CSSProperties, useEffect, useState } from 'react';
import Link from 'next/link';
import Portal from 'pages/portal/[[...params]]';
import { onAuthStateChanged, User } from 'firebase/auth';
import { Firebase } from '@consts/Firebase';
import Loading from './Loading';

type LayoutProps = {
    style?: CSSProperties;
    isHideSidebar?: boolean;
    isAuth?: boolean;
    children: React.ReactNode;
    header?: React.ReactNode;
};

export default function Layout(props: LayoutProps) {
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(Firebase.auth, (user: User) => {
            console.log('App:firebase user:', { user });
            console.log('layout', user === undefined || user === null);
            setIsLoading(user === undefined || user === null);
        });
        return unsubscribe;
    }, []);

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
                    background: '#ffffff',
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
                        {props.isAuth && isLoading ? (
                            <Loading />
                        ) : (
                            props.children
                        )}
                        {/* <Footer/> */}
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
        'Tanks',
        'Pools'
        // 'Transactions',

        // 'Drains'
        //'Plaid'
    ];

    return (
        <div
            style={{
                width: 150,
                background: 'negro'
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
                                cursor: 'pointer',
                                background: 'white',
                                margin: '1px'
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
