import { SignOutButton } from './Auth';
import { User } from 'firebase/auth';
import { useEffect, useState } from 'react';

type PortalProps = {
    user: User;
};

export default function Portal(props: PortalProps) {
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
            <h1>Welcome to your portal</h1>
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
