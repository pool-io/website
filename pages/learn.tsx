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
                    width: '100%',
                    height: '100%'
                }}
            >
                <h1>Learn</h1>
            </div>
        </Layout>
    );
}
