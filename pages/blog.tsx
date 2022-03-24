import styles from './index.module.css';
import Layout from '@components/layout';

export default function Blog() {
    return (
        <Layout route="/blog">
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    marginTop: 100,
                    width: '100%',
                    height: '100%'
                }}
            >
                <h1>Blog</h1>
            </div>
        </Layout>
    );
}
