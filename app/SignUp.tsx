import styles from './index.module.css';
import {
    FormEvent,
    FormEventHandler,
    ChangeEvent,
    ChangeEventHandler,
    useState
} from 'react';
import Layout from '@components/layout';

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
            </div>
        </Layout>
    );
}
