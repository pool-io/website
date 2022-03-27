import { useEffect, useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { onAuthStateChanged, User } from 'firebase/auth';
import { Firebase } from './Firebase';
import Portal from './Portal';
import Auth from './Auth';

function Loading() {
    return <h1>LOADING...</h1>;
}

export type AppProps = {
    isSignUp: boolean;
};

export default function App(props: AppProps) {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [authUser, setAuthUser] = useState<User>(undefined);
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(Firebase.auth, (user: User) => {
            console.log('App:firebase user:', { user });
            setAuthUser(user);
            setIsLoading(false);
        });
        return unsubscribe;
    }, []);

    console.log('App:return');
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
            {isLoading ? (
                <Loading />
            ) : authUser ? (
                <Portal />
            ) : (
                <Auth isSignUp={props.isSignUp} />
            )}
        </div>
    );
}
