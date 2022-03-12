import styles from './index.module.css';
import Layout from '@components/layout';

export default function Learn() {
    return (
        <Layout route="/learn">
            <div className={styles.container}>
                <h1>Learn</h1>
            </div>
        </Layout>
    );
}
