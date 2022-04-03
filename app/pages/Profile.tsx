import { useEffect, useState } from 'react';
import { User } from 'firebase/auth';
import { SignOutButton } from '@app/Auth';

export type ProfileProps = {
    user: User;
};

export default function Profile(props: ProfileProps) {
    const [idToken, setIdToken] = useState<string>('');

    useEffect(() => {
        props.user.getIdToken().then(setIdToken);
    }, []);

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
            <p>
                ID Token:
                <p style={{ width: '80vw', overflowWrap: 'break-word' }}>
                    {idToken}
                </p>
            </p>
            <SignOutButton />
        </div>
    );
}
