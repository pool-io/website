import {
    useState,
    FormEvent,
    FormEventHandler,
    ChangeEvent,
    ChangeEventHandler,
    MouseEventHandler,
    useEffect
} from 'react';
// import styles from '../../styles/components/auth/Login.module.scss';
import Head from 'next/head';
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
// import { useRouter } from 'next/router';
import Router from 'next/router';
import useAuthUser from '@hooks/useAuthUser';
import styles from './Login.module.scss';

// export interface UserRegisterInterface {
//     email: string;
//     password: string;
//     confirmPassword: string;
//     username: string;
// }

// export interface UserLoginInterface {
//     email: string;
//     password: string;
// }

// export default function Login() {
//     const router = useRouter();
//     const formRef = useRef(null);
//     const [errors, setErrors] = useState({ email: '', password: '' });
//     const [passVal, setPassVal] = useState('');
//     const [submitError, setSubmitError] = useState(null);

//     useEffect(() => {}, []);
//     const formValid = () => {
//         if (formRef.current) {
//             let formData = new FormData(formRef.current);
//             return (
//                 errors.password === '' &&
//                 errors.email === '' &&
//                 passVal !== '' &&
//                 formData.get('email') !== ''
//             );
//         }
//         return false;
//     };

//     const formHandler = (e) => {
//         const { name, value } = e.target;
//         let tempErrors = errors;
//         switch (name) {
//             case 'email':
//                 const emailRegex =
//                     /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//                 tempErrors.email = emailRegex.test(value)
//                     ? ''
//                     : 'Email is not valid';
//                 break;
//             case 'password':
//                 setPassVal(value.replace(/\s/g, ''));
//                 tempErrors.password =
//                     value.length < 8
//                         ? 'Password must be at least 8 characters'
//                         : '';
//                 break;
//             default:
//                 break;
//         }
//         setErrors(Object.assign({}, tempErrors));
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         const { name } = e.target;
//     };

//     const handleSubmitGoogle = async (event) => {
//         event.preventDefault();
//         //@ts-ignore
//     };

//     const handleSubmitFacebook = async (event) => {
//         event.preventDefault();
//         //@ts-ignore
//     };
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
        <div
            style={{
                width: '350px',
                textAlign: 'center',
                //fontFamily: 'Roboto',
                padding: '15px',
                borderRadius: '20px',
                backgroundColor: '#02809066',
                border: '1px solid #028090',
                //opacity: '20%'
                zIndex: 1
            }}
        >
            <Head>
                <title>Sign up for Pool</title>
            </Head>

            <div
                style={{
                    width: '100%',
                    color: 'white',
                    zIndex: '1'
                }}
            >
                {/* <h2
                    style={{
                        //fontFamily: 'Roboto Conde',
                        marginBottom: '20px',
                        color: 'white'
                    }}
                >
                    Login
                </h2> */}
                {/* {submitError && (
                    <div
                        style={{
                            width: '100%',
                            display: 'flex',
                            justifyContent: 'center',
                            marginTop: '20px'
                        }}
                    >
                        {submitError.message}
                    </div>
                )} */}

                <form
                    onSubmit={onSubmit}
                    style={{
                        textAlign: 'left'
                    }}
                    // ref={formRef}
                >
                    <label
                        style={{
                            fontSize: '16px'
                        }}
                    >
                        Email
                    </label>
                    <br />
                    {/* <span
                        style={{
                            fontSize: '12px',
                            color: '#ff0033'
                        }}
                    >
                        {errors.email}
                    </span> */}
                    <input
                        type="text"
                        placeholder="Email"
                        name="email"
                        onChange={onEmail}
                        style={{
                            border: 'none',
                            outline: 'none',
                            boxSizing: 'border-box',
                            margin: '5px 0 15px',
                            width: '100%',
                            padding: '10px'
                            //fontFamily: 'Roboto'
                        }}
                    />

                    <label>Password</label>
                    <br />
                    {/* <span
                        style={{
                            fontSize: '12px',
                            color: '#ff0033'
                        }}
                    >
                        {errors.password}
                    </span> */}
                    <input
                        type="password"
                        placeholder="Password"
                        name="password"
                        onChange={onPassword}
                        style={{
                            border: 'none',
                            outline: 'none',
                            boxSizing: 'border-box',
                            margin: '5px 0 15px',
                            width: '100%',
                            padding: '10px'
                            //fontFamily: 'Montserrat'
                        }}
                    />

                    <div
                        style={{
                            width: '100%',
                            display: 'flex',
                            justifyContent: 'center'
                        }}
                    >
                        <button
                            style={{
                                width: '100%',
                                padding: '10px',
                                borderRadius: '30px',
                                color: 'black',
                                border: 'none',
                                outline: 'none',
                                backgroundColor: 'white',
                                fontSize: '20px',
                                cursor: 'pointer'
                            }}
                            // disabled={!formValid()}
                            onClick={onSubmit}
                            name="email_login"
                        >
                            Log in
                        </button>
                    </div>
                </form>

                {/* <div
                    style={{
                        marginTop: '10px',
                        fontSize: '14px'
                    }}
                > */}
                {/* <span className={styles.other_pages}> */}
                {/* <span>
                        Don't have an account?
                        <Link href={{ pathname: '/signup' }}>
                            <a
                                style={{
                                    color: 'white',
                                    marginLeft: '5px'
                                }}
                            >
                                Sign up
                            </a>
                        </Link>
                    </span>
                </div>

                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        marginTop: '20px'
                    }}
                > */}
                {/*google */}
                {/* <button
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            backgroundColor: 'white',
                            outline: 'none',
                            border: 'none',
                            padding: '10px 20px',
                            alignItems: 'center',
                            marginBottom: '15px',
                            cursor: 'pointer'
                        }}
                        name="google_login"
                        onClick={handleSubmitGoogle}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 533.5 544.3"
                            style={{
                                width: '14px',
                                height: '14px'
                            }}
                        >
                            <path
                                d="M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z"
                                fill="#4285f4"
                            />
                            <path
                                d="M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z"
                                fill="#34a853"
                            />
                            <path
                                d="M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z"
                                fill="#fbbc04"
                            />
                            <path
                                d="M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z"
                                fill="#ea4335"
                            />
                        </svg>
                        <span
                            style={{
                                marginLeft: '10px'
                            }}
                        >
                            Login with Google
                        </span>
                    </button> */}

                {/*facebook */}
                {/* <button
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            backgroundColor: 'white',
                            outline: 'none',
                            border: 'none',
                            padding: '10px 20px',
                            alignItems: 'center',
                            marginBottom: '15px',
                            cursor: 'pointer'
                        }}
                        name="facebook_login"
                        onClick={handleSubmitFacebook}
                    >
                        <svg
                            width="14"
                            height="14"
                            viewBox="0 0 14 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            style={{
                                width: '14px',
                                height: '14px'
                            }}
                        >
                            <path
                                d="M14 1.5C14 1.09375 13.8438 0.75 13.5625 0.4375C13.25 0.15625 12.9062 0 12.5 0H1.5C1.0625 0 0.71875 0.15625 0.4375 0.4375C0.125 0.75 0 1.09375 0 1.5V12.5C0 12.9375 0.125 13.2812 0.4375 13.5625C0.71875 13.875 1.0625 14 1.5 14H7.65625V8.46875H5.75V6.34375H7.65625V4.78125C7.65625 3.90625 7.875 3.25 8.375 2.75C8.875 2.25 9.53125 2 10.375 2C11 2 11.5625 2.03125 12 2.09375V3.96875H10.875C10.4688 3.96875 10.1875 4.0625 10.0312 4.25C9.90625 4.4375 9.84375 4.6875 9.84375 5V6.34375H12L11.7188 8.46875H9.84375V14H12.5C12.9062 14 13.25 13.875 13.5625 13.5625C13.8438 13.2812 14 12.9375 14 12.5V1.5Z"
                                fill="#4267B2"
                            />
                        </svg>
                        <span
                            style={{
                                marginLeft: '10px'
                            }}
                        >
                            Login with Facebook
                        </span>
                    </button> */}
                {/* </div> */}
            </div>
        </div>
    );
}
export default function Auth(props: AuthProps) {
    const user = useAuthUser();

    useEffect(() => {
        if (user) {
            Router.push(props.redirect ? props.redirect : '/portal');
        }
    }, [user]);

    const [isForgotPassword, setIsForgotPassword] = useState(false);
    const onSubmit = ({ email, password }: Credentials) => {
        console.log('SignIn:onSubmit', { email, password });
        signInWithEmailAndPassword(Firebase.auth, email, password)
            .then((userCredentials: UserCredential) => {
                console.log('SignIn:onSubmit', { userCredentials });
            })
            .catch((err: AuthError) => {
                console.log(err);
                // switch (err.code) {
                //     case AuthErrorCodes.INVALID_PASSWORD:
                //         setMessage('wrong email/password');
                //         break;
                //     case AuthErrorCodes.INVALID_EMAIL:
                //         setMessage('invalid email');
                //         break;
                //     case AuthErrorCodes.TOO_MANY_ATTEMPTS_TRY_LATER:
                //         setMessage('too many attempts');
                //         break;
                //     default:
                //         setMessage(err.message);
                //         console.log('SignUp:onSubmit', { err });
                // }
                // setIsLoading(false);
            });
    };

    return (
        <div
            style={{
                width: '100%',
                justifyContent: 'center',
                display: 'flex'
            }}
        >
            <Form onSubmit={onSubmit} />
        </div>
    );
}
export type AuthProps = {
    isSignUp: boolean;
    redirect?: string;
};
