import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Auth from '@components/Auth';
import SideBar from '@components/SideBar';
import useAuthUser from '@hooks/useAuthUser';

function Loading() {
    return <h1>LOADING...</h1>;
}

export type AppProps = {
    children: React.ReactNode;
};

export default function App(props: AppProps) {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const authUser = useAuthUser();

    useEffect(() => {
        if (authUser) {
            setIsLoading(false);
        }
    }, [authUser]);

    const router = useRouter();
    const isSignUp = router.query['signup'] !== undefined;
    console.log('App: parse router', {
        signup: router.query['signup'],
        isSignUp: isSignUp
    });

    return (
        <div
            className="app"
            style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                width: '100vw',
                background: '#f0f0f0'
            }}
        >
            {isLoading ? (
                <Loading />
            ) : authUser ? (
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                        height: '100vh',
                        width: '100vw'
                    }}
                >
                    <SideBar />
                    {props.children}
                </div>
            ) : (
                <Auth isSignUp={isSignUp} />
            )}
        </div>
    );
}
