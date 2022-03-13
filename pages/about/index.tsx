import styles from './index.module.css';
import Image from 'next/image';

import Layout from '@components/layout';

export default function About() {
    return (
        <Layout route="/about">
            <div className={styles.container}>
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
