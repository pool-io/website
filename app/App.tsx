import { useEffect, useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { onAuthStateChanged, User } from 'firebase/auth';
import { Firebase } from './firebase';
import Portal from 'pages/portal';
import Auth from './Auth';

export type AppProps = {
    isSignUp: boolean;
};

export default function App(props: AppProps) {
    const [authUser, setAuthUser] = useState<User>(null);
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(Firebase.auth, (user: User) => {
            console.log('firebase user:', user);
            setAuthUser(user);
        });
        return unsubscribe;
    }, []);

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
            {authUser ? <Portal /> : <Auth isSignUp={props.isSignUp} />}
        </div>
    );
}
