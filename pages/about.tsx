import styles from './index.module.css';
import Image from 'next/image';

import Layout from '@components/layout';

export default function About() {
    return (
        <Layout route="/about">
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    marginTop: 100,
                    width: '100%',
                    height: '100%'
                }}
            >
                <h1>About</h1>
                <Image
                    src="/images/logo.png"
                    alt="by Daniel Lim"
                    width={1000}
                    height={500}
                />
            </div>
        </Layout>
    );
}
