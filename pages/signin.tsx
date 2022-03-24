import styles from './index.module.css';
import {
    FormEvent,
    FormEventHandler,
    ChangeEvent,
    ChangeEventHandler,
    useState
} from 'react';
import Layout from '@components/layout';

function Form() {
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

export default function SignIn() {
    return (
        <Layout route="/signin">
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
                <h1>Sign In</h1>
                <Form />
            </div>
        </Layout>
    );
}
