import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Auth from '@components/Auth';
import SideBar from '@portal/components/SideBar';
import useAuthUser from '@hooks/useAuthUser';
import Overview from './pages/Overview';
import Pools from './pages/pools';
import Tanks from './pages/Tanks';
import Friends from './pages/friends';
import Explore from './pages/explore';
import Profile from './pages/profile';

export enum Page {
    OVERVIEW,
    POOLS,
    TANKS,
    FRIENDS,
    EXPLORE,
    PROFILE
}

function Loading() {
    return <h1>LOADING...</h1>;
}

export type AppProps = {
    page?: Page;
};

export default function App(props: AppProps) {
    const [isLoading, setIsLoading] = useState<boolean>(true);

    const authUser = useAuthUser();
    useEffect(() => {
        setIsLoading(false);
    }, [authUser]);

    const [page, setPage] = useState<Page>(
        props.page ? props.page : Page.OVERVIEW
    );
    const handlePage = (page: Page) => {
        setPage(page);
    };

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
                    <SideBar handlePage={handlePage} />
                    {(() => {
                        switch (page) {
                            case Page.OVERVIEW:
                                return <Overview />;
                            case Page.POOLS:
                                return <Pools />;
                            case Page.TANKS:
                                return <Tanks />;
                            case Page.FRIENDS:
                                return <Friends />;
                            case Page.EXPLORE:
                                return <Explore />;
                            case Page.PROFILE:
                                return <Profile />;
                            default:
                                return <Overview />;
                        }
                    })()}
                </div>
            ) : (
                <Auth isSignUp={isSignUp} />
            )}
        </div>
    );
}
