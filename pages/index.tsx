import styles from './index.module.css';
import Link from 'next/link';
import Image from 'next/image';
import Layout from '@components/layout';

export default function Home() {
    return (
        <Layout route="/">
            <div className={styles.container}>
                <h1>pool</h1>
            </div>
            <Image
                src="/images/logo.png"
                alt="by Daniel Lim"
                width={1000}
                height={500}
            />
            <p>One place to manage all your finances</p>
            <Link href="/about">
                <a>learn more</a>
            </Link>
        </Layout>
    );
}
