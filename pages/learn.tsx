import styles from './index.module.css';
import Layout from '@components/layout';

export default function Learn() {
    return (
        <Layout route="/learn">
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    marginTop: 100,
                    width: '100vw',
                    height: '100vh'
                }}
            >
                <h1>Learn</h1>
            </div>
        </Layout>
    );
}
