import { useEffect, useState } from 'react';
import App from '@components/App';
import { SignOutButton } from '@components/Auth';
import useAuthUser from '@hooks/useAuthUser';

export default function Profile() {
    const authUser = useAuthUser();
    const [idToken, setIdToken] = useState<string>('');

    useEffect(() => {
        if (authUser) {
            authUser.getIdToken().then(setIdToken);
        }
    }, [authUser]);

    return (
        <App>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                <h1>Profile</h1>
                <p>
                    ID Token:
                    <p style={{ width: '50vw', overflowWrap: 'break-word' }}>
                        {idToken}
                    </p>
                </p>
                <SignOutButton />
            </div>
        </App>
    );
}
