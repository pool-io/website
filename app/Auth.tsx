import {
    useState,
    FormEvent,
    FormEventHandler,
    ChangeEvent,
    ChangeEventHandler
} from 'react';
import Link from 'next/link';
import { Firebase } from './firebase';
import { onAuthStateChanged, User } from 'firebase/auth';
import { prependOnceListener } from 'process';
import { setUserProperties } from 'firebase/analytics';

type Credentials = {
    email: string;
    password: string;
};

type FormProps = {
    onSubmit: (credentials: Credentials) => void;
};

function Form(props: FormProps) {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const onEmail: ChangeEventHandler = (e: ChangeEvent<HTMLInputElement>) => {
        console.log(`email: ${e.target.value}`);
        e.preventDefault();
        setEmail(e.target.value);
    };

    const onPassword: ChangeEventHandler = (
        e: ChangeEvent<HTMLInputElement>
    ) => {
        console.log(`password: ${e.target.value}`);
        e.preventDefault();
        setPassword(e.target.value);
    };

    const onSubmit: FormEventHandler = (e: FormEvent) => {
        e.preventDefault(); // default reloads
        props.onSubmit({ email, password });
    };

    return (
        <form
            onSubmit={onSubmit}
            style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            <input
                type="text"
                name="email"
                placeholder="Email"
                onChange={onEmail}
            />
            <input
                type="password"
                name="password"
                placeholder="Password"
                onChange={onPassword}
            />
            <input type="submit" name="email" value="GO!" />
        </form>
    );
}

function SignUp() {
    const onSubmit = ({ email, password }: Credentials) => {
        console.log('SignUp:onSubmit', { email, password });
    };

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
            <Form onSubmit={onSubmit} />
            <p>Already have an account?</p>
            <Link href="/portal">
                <p>SIGN IN</p>
            </Link>
        </div>
    );
}

function SignIn() {
    const onSubmit = ({ email, password }: Credentials) => {
        console.log('SignUp:onSubmit', { email, password });
    };

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
            <Form onSubmit={onSubmit} />
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
