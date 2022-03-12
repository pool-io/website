import styles from './index.module.css';
import Layout from '@components/layout';

export default function SignIn() {
    return (
        <Layout route="/signin">
            <div className={styles.container}>
                <h1>Sign In</h1>
            </div>
        </Layout>
    );
}
