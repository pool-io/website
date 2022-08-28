import {
    useState,
    FormEvent,
    FormEventHandler,
    ChangeEvent,
    ChangeEventHandler,
    MouseEventHandler,
    useEffect
} from 'react';
import Link from 'next/link';
import { Firebase } from '@consts/Firebase';
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateCurrentUser,
    UserCredential,
    AuthError,
    AuthErrorCodes
} from 'firebase/auth';
// import { FacebookAuthProvider } from "firebase/auth";
import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    sendPasswordResetEmail
} from 'firebase/auth';
import GoogleButton from 'react-google-button';
import Drop from './Drop';
import useAuthUser from '@hooks/useAuthUser';
import Router from 'next/router';

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
                style={{
                    fontSize: 35,
                    border: 'none',
                    borderBottom: '2px dashed black',
                    color: 'black',
                    paddingLeft: 10,
                    margin: 10,
                    background: 'none'
                }}
            />
            <input
                type="password"
                name="password"
                placeholder="Password"
                onChange={onPassword}
                style={{
                    fontSize: 35,
                    border: 'none',
                    borderBottom: '2px dashed black',
                    color: 'black',
                    paddingLeft: 10,
                    margin: 10,
                    background: 'none'
                }}
            />
            <input
                type="submit"
                name="email"
                value="GO!"
                style={{
                    fontSize: 35,
                    border: '2px dashed black',
                    borderRadius: 15,
                    borderBottom: '2px dashed black',
                    color: 'black',
                    padding: 10,
                    margin: 20,
                    cursor: 'pointer'
                }}
            />
        </form>
    );
}

type ForgotPasswordProps = {
    handleSignIn: () => void;
};

function ForgotPassword(props: ForgotPasswordProps) {
    const [email, setEmail] = useState<string>('');

    const onEmail: ChangeEventHandler = (e: ChangeEvent<HTMLInputElement>) => {
        console.log(`email: ${e.target.value}`);
        e.preventDefault();
        setEmail(e.target.value);
    };

    const onSubmit: FormEventHandler = (e: FormEvent) => {
        e.preventDefault(); // default reloads

        const auth = getAuth();
        sendPasswordResetEmail(auth, email)
            .then(() => {
                // Password reset email sent!
                // ..
                console.log('password reset sent');
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
                console.log(
                    `error in password reset -- code: ${errorCode} -- message: ${errorMessage}`
                );
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
            <h1>Enter your email</h1>
            <form
                onSubmit={onSubmit}
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                <input
                    type="text"
                    name="email"
                    placeholder="Email"
                    onChange={onEmail}
                    style={{
                        fontSize: 35,
                        border: 'none',
                        borderBottom: '2px dashed black',
                        color: 'black',
                        paddingLeft: 10,
                        margin: 10,
                        background: 'none'
                    }}
                />
                <input
                    type="submit"
                    name="email"
                    value="GO!"
                    style={{
                        fontSize: 35,
                        border: '2px dashed black',
                        borderRadius: 15,
                        borderBottom: '2px dashed black',
                        color: 'black',
                        padding: 10,
                        margin: 20,
                        cursor: 'pointer'
                    }}
                />
            </form>
            <button
                style={{
                    fontSize: 35,
                    border: 'none',
                    padding: 10,
                    margin: 20,
                    cursor: 'pointer'
                }}
                onClick={() => props.handleSignIn()}
            >
                just kidding?
            </button>
        </div>
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
                    case AuthErrorCodes.WEAK_PASSWORD:
                        setMessage('password must be at least 6 characters');
                        break;
                    default:
                        setMessage(err.message);
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
            <Form onSubmit={onSubmit} />
            <p style={{ color: 'red' }}>{message}</p>
            <SignInWithGoogle />
            <p>Already have an account?</p>
            <Link href="/portal">
                <p>SIGN IN</p>
            </Link>
        </div>
    );
}

type SignInProps = {
    handleForgotPassword: () => void;
};

function SignIn(props: SignInProps) {
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
                        setMessage(err.message);
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
            <Form onSubmit={onSubmit} />
            <p style={{ color: 'red' }}>{message}</p>
            <SignInWithGoogle />
            <div style={{ height: 10 }} />
            <button onClick={() => props.handleForgotPassword()}>
                Forgot Password
            </button>
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

function SignInWithGoogle() {
    function handleGoogleLogin() {
        console.log('login with google');
        const auth = getAuth();
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential =
                    GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                // ...
            })
            .catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential =
                    GoogleAuthProvider.credentialFromError(error);
                // ...

                console.log(
                    `[handleGoogleLogin] error -- [${errorCode}] ${errorMessage}`
                );
            });
    }
    return <GoogleButton onClick={() => handleGoogleLogin()} />;
}

export type AuthProps = {
    isSignUp: boolean;
    redirect?: string;
};

export default function Auth(props: AuthProps) {
    const user = useAuthUser();

    useEffect(() => {
        if (user) {
            Router.push(props.redirect ? props.redirect : '/portal');
        }
    }, [user]);

    const [isForgotPassword, setIsForgotPassword] = useState(false);

    return (
        <>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    alignItems: 'center'
                }}
            >
                <h1
                    style={{
                        padding: '20px',
                        border: '1px dashed black',
                        borderRadius: 10,
                        fontSize: 100
                    }}
                >
                    {props.isSignUp
                        ? 'SIGN UP'
                        : isForgotPassword
                        ? 'STUPID'
                        : 'SIGN IN'}
                </h1>

                {props.isSignUp ? (
                    <SignUp />
                ) : isForgotPassword ? (
                    <ForgotPassword
                        handleSignIn={() => setIsForgotPassword(false)}
                    />
                ) : (
                    <SignIn
                        handleForgotPassword={() => setIsForgotPassword(true)}
                    />
                )}
            </div>
        </>
    );
}
