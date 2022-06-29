import { useQuery } from '@apollo/client';
import Drop from '@components/Drop';
import useAuthUser from '@hooks/useAuthUser';
import { QUERY_GET_USER } from 'graphql/user';
import Link from 'next/link';
import { useEffect } from 'react';

function Search() {
    return (
        <div>
            <p>Search</p>
        </div>
    );
}

function Tabs() {
    return (
        <div>
            <p>Tabs</p>
        </div>
    );
}

function Profile() {
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
            <Link href="/portal/profile">
                {loading ? <p>Loading</p> : <p>{data?.user?.username}</p>}
            </Link>
        </div>
    );
}

export default function Header() {
    return (
        <div
            style={{
                width: '100%',
                background: 'white',
                display: 'flex',
                justifyContent: 'center'
            }}
        >
            <Link href="/">
                <div
                    style={{
                        cursor: 'pointer',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                >
                    <Drop width={70} height={70} color="black" />
                </div>
            </Link>
            <div
                style={{
                    flex: 1,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                <Search />
            </div>
            <div
                style={{
                    flex: 1,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                <Tabs />
            </div>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    paddingRight: 25
                }}
            >
                <Profile />
            </div>
        </div>
    );
}
