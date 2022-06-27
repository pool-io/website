import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import useAuthUser from '@hooks/useAuthUser';
import Auth from '@components/Auth';
import SideBar from '@portal/components/SideBar';
import Overview from '@portal/pages/Overview';
import Pools from '@portal/pages/Pools';
import Tanks from '@portal/pages/Tanks';
import Friends from '@portal/pages/Friends';
import Explore from '@portal/pages/Explore';
import Profile from '@portal/pages/Profile';
import { URL_PARAMS } from './consts';

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

export type AppProps = {};

export default function App(props: AppProps) {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState<boolean>(true);

    const authUser = useAuthUser();
    useEffect(() => {
        if (authUser !== undefined) {
            setIsLoading(false);
        }
    }, [authUser]);

    useEffect(() => {
        if (!router.query[URL_PARAMS]) {
            setPage(Page.OVERVIEW);
            return;
        }
        switch (router.query[URL_PARAMS][0]) {
            case 'overview':
                setPage(Page.OVERVIEW);
                break;
            case 'pools':
                setPage(Page.POOLS);
                break;
            case 'tanks':
                setPage(Page.TANKS);
                break;
            case 'friends':
                setPage(Page.FRIENDS);
                break;
            case 'explore':
                setPage(Page.EXPLORE);
                break;
            case 'profile':
                setPage(Page.PROFILE);
                break;
            default:
                setPage(Page.OVERVIEW);
        }
    }, [router]);

    const [page, setPage] = useState<Page>(null);
    const handlePage = (page: Page) => {
        const name = (() => {
            switch (page) {
                case Page.OVERVIEW:
                    return 'overview';
                case Page.POOLS:
                    return 'pools';
                case Page.TANKS:
                    return 'tanks';
                case Page.FRIENDS:
                    return 'friends';
                case Page.EXPLORE:
                    return 'explore';
                case Page.PROFILE:
                    return 'profile';
                default:
                    return 'error';
            }
        })();

        router.push(`/portal/${name}`);
        setPage(page);
    };

    const isSignUp = router.query['signup'] !== undefined;
    // console.log('App: parse sign up params', {
    //     signup: router.query['signup'],
    //     isSignUp: isSignUp
    // });

    return (
        <div
            className="app"
            style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'stretch',
                background: '#f0f0f0',
                height: '100vh'
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
                        alignItems: 'stretch',
                        height: '100%'
                    }}
                >
                    <SideBar page={page} handlePage={handlePage} />
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            // height: '100%',
                            // paddingTop: 100,
                            paddingLeft: 50
                        }}
                    >
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
                                    return <Loading />;
                            }
                        })()}
                    </div>
                </div>
            ) : (
                <Auth isSignUp={isSignUp} />
            )}
        </div>
    );
}
