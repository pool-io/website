import { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { Firebase } from './firebase';
import Portal from 'pages/portal';
import SignIn from '@app/SignIn';

export type AppProps = {};

export default function App(props: AppProps) {
    const [isSignedIn, setIsSignedIn] = useState<boolean>(false);

    const handleIsSignedIn = (isSignedIn: boolean) => {
        setIsSignedIn(isSignedIn);
    };

    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                width: '100vw'
            }}
        >
            {isSignedIn ? <Portal /> : <SignIn />}
        </div>
    );
}
