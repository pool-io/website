import styles from './index.module.css';
import Layout from '@components/layout';

export default function Blog() {
    return (
        <Layout route="/blog">
            <div className={styles.container}>
                <h1>Blog</h1>
            </div>
        </Layout>
    );
}
