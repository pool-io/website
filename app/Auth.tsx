import {
    useState,
    FormEvent,
    FormEventHandler,
    ChangeEvent,
    ChangeEventHandler,
    MouseEventHandler
} from 'react';
import Link from 'next/link';
import { Firebase } from '@app/Firebase';
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateCurrentUser,
    UserCredential,
    AuthError,
    AuthErrorCodes
} from 'firebase/auth';

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
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [message, setMessage] = useState<string>('');

    const onSubmit = ({ email, password }: Credentials) => {
        console.log('SignUp:onSubmit', { email, password });

        setIsLoading(true);
        createUserWithEmailAndPassword(Firebase.auth, email, password)
            .then((userCredential: UserCredential) => {
                console.log('SignUp:onSubmit', { userCredential });
            })
            .catch((err: AuthError) => {
                switch (err.code) {
                    case AuthErrorCodes.INVALID_EMAIL:
                        setMessage('invalid email');
                        break;
                    case AuthErrorCodes.EMAIL_EXISTS:
                        setMessage('email is already in use');
                        break;
                    default:
                        console.log('SignUp:onSubmit', { err });
                }
                setIsLoading(false);
            });
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
            <p style={{ color: 'red' }}>{message}</p>
            <p>Already have an account?</p>
            <Link href="/portal">
                <p>SIGN IN</p>
            </Link>
        </div>
    );
}

function SignIn() {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [message, setMessage] = useState<string>('');

    const onSubmit = ({ email, password }: Credentials) => {
        console.log('SignIn:onSubmit', { email, password });
        signInWithEmailAndPassword(Firebase.auth, email, password)
            .then((userCredentials: UserCredential) => {
                console.log('SignIn:onSubmit', { userCredentials });
            })
            .catch((err: AuthError) => {
                switch (err.code) {
                    case AuthErrorCodes.INVALID_PASSWORD:
                        setMessage('wrong email/password');
                        break;
                    case AuthErrorCodes.INVALID_EMAIL:
                        setMessage('invalid email');
                        break;
                    case AuthErrorCodes.TOO_MANY_ATTEMPTS_TRY_LATER:
                        setMessage('too many attempts');
                        break;
                    default:
                        console.log('SignUp:onSubmit', { err });
                }
                setIsLoading(false);
            });
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
            <p style={{ color: 'red' }}>{message}</p>
            <p>Don't have an account?</p>
            <Link href="/portal?signup">
                <p>SIGN UP</p>
            </Link>
        </div>
    );
}

export function SignOutButton() {
    const handleSignOut: MouseEventHandler<HTMLButtonElement> = (e) => {
        e.preventDefault();
        updateCurrentUser(Firebase.auth, null);
    };

    return <button onClick={handleSignOut}>Sign Out</button>;
}

export type AuthProps = {
    isSignUp: boolean;
};

export default function Auth(props: AuthProps) {
    return props.isSignUp ? <SignUp /> : <SignIn />;
}
