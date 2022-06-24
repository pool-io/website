import { useEffect, useState } from 'react';
import { SignOutButton } from '@components/Auth';
import useAuthUser from '@hooks/useAuthUser';
import useMyUser from '@portal/hooks/useMyUser';
import { useQuery } from '@apollo/client';
import { GET_USER } from 'graphql/query';

export default function Profile() {
    const authUser = useAuthUser();
    const [idToken, setIdToken] = useState<string>('');

    useEffect(() => {
        if (authUser && !idToken) {
            authUser.getIdToken().then(setIdToken);
        }
    }, [authUser]);

    const { loading, error, data } = useQuery(GET_USER);

    if (loading) {
        return <div>Loading</div>;
    }

    if (error) {
        console.log(error);
        return <div>Error</div>;
    }

    console.log(data);

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            <h1>Profile</h1>
            <p>Username: {data?.user?.username}</p>
            <p>ID Token:</p>
            <p style={{ width: '50vw', overflowWrap: 'break-word' }}>
                {idToken}
            </p>
            <SignOutButton />
        </div>
    );
}
