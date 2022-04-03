import { SignOutButton } from './Auth';
import { User } from 'firebase/auth';
import { useEffect, useState } from 'react';
import SideBar from './components/SideBar';

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
                flexDirection: 'row',
                justifyContent: 'flex-start',
                alignItems: 'center',
                height: '100vh',
                width: '100vw'
            }}
        >
            <SideBar />
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
        </div>
    );
}
