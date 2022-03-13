import styles from './index.module.css';
import Link from 'next/link';
import Image from 'next/image';
import Layout from '@components/layout';
import Card from '@components/card';

export default function Home() {
    return (
        <Layout route="/">
            <div className={styles.hero}>
                <Card color="grey">
                    <h1>pool</h1>
                    <p>One place to manage all your finances</p>
                    <Link href="/about">
                        <a>learn more</a>
                    </Link>
                </Card>
                <Card>
                    <h1>Welcome to POOL!</h1>
                </Card>
            </div>
            <div className={styles.hero}>
                <Card color="white">
                    <h1>pool</h1>
                    <p>One place to manage all your finances</p>
                    <Link href="/about">
                        <a>learn more</a>
                    </Link>
                </Card>
                <Card color="orange">
                    <h1>Welcome to POOL!</h1>
                </Card>
            </div>
        </Layout>
    );
}
