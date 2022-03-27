import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Firebase } from './firebase';
import { onAuthStateChanged, User } from 'firebase/auth';

function SignUp() {
    return (
        <div
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
            <h1>SIGN UP</h1>
            <p>Already have an account?</p>
            <Link href="/portal">
                <p>SIGN IN</p>
            </Link>
        </div>
    );
}

function SignIn() {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            <h1>SIGN IN</h1>
            <p>Don't have an account?</p>
            <Link href="/portal?signup">
                <p>SIGN UP</p>
            </Link>
        </div>
    );
}

export type AuthProps = {
    isSignUp: boolean;
};

export default function Auth(props: AuthProps) {
    return props.isSignUp ? <SignUp /> : <SignIn />;
}
