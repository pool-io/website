import styles from './index.module.css';
import {
    FormEvent,
    FormEventHandler,
    ChangeEvent,
    ChangeEventHandler,
    useState
} from 'react';
import Layout from '@components/layout';

type Birthday = {
    day: number;
    month: number;
    year: number;
};

type FormData = {
    first: string;
    last: string;
    email: string;
    password: string;
    gender: string;
    birthday: Birthday;
};

function Form() {
    const [data, setData] = useState<FormData>({
        first: '',
        last: '',
        email: '',
        password: '',
        gender: '',
        birthday: null
    });

    const onEmail: ChangeEventHandler = (e: ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        console.log(`email: ${e.target.value}`);
        data.email = e.target.value;
        setData(data);
    };

    const onPassword: ChangeEventHandler = (
        e: ChangeEvent<HTMLInputElement>
    ) => {
        e.preventDefault();
        console.log(`password: ${e.target.value}`);
        data.password = e.target.value;
        setData(data);
    };

    const onSubmit: FormEventHandler = (e: FormEvent) => {
        console.log('submitted');
        e.preventDefault(); // default reloads
        // TODO: send
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
                name="first"
                placeholder="First Name"
                onChange={onEmail}
            />
            <input
                type="text"
                name="last"
                placeholder="Last Name"
                onChange={onEmail}
            />
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
            <input type="submit" name="email" value="Sign In" />
        </form>
    );
}

export default function SignUp() {
    return (
        <Layout route="/signup">
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
                <h1>Sign Up</h1>
                <Form />
            </div>
        </Layout>
    );
}
