import { useEffect, useState } from 'react';
import { SignOutButton } from '@components/Auth';
import useAuthUser from '@hooks/useAuthUser';
import useMyUser from '@portal/hooks/useMyUser';

export default function Profile() {
    const authUser = useAuthUser();
    const [idToken, setIdToken] = useState<string>('');

    const myUser = useMyUser();

    useEffect(() => {
        if (authUser) {
            authUser.getIdToken().then(setIdToken);
        }
    }, [authUser]);

    useEffect(() => {}, [myUser]);

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
            <p>Username: {myUser?.username}</p>
            <p>ID Token:</p>
            <p style={{ width: '50vw', overflowWrap: 'break-word' }}>
                {idToken}
            </p>
            <SignOutButton />
        </div>
    );
}
