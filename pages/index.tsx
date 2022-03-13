import styles from './index.module.css';
import Link from 'next/link';
import Image from 'next/image';
import Layout from '@components/layout';
import Card from '@components/card';
import Drop from '@components/logo/drop';

export default function Home() {
    return (
        <Layout route="/">
            <div className={styles.hero}>
                <Card color="darkblue">
                    <div style={{ width: '50%' }}>
                        <Drop color="white" />
                    </div>
                </Card>
                <Card>
                    <h1>
                        Welcome to <a style={{ color: 'orange' }}>POOL</a>!
                    </h1>
                    <div style={{ height: '10%' }} />
                    <p>We're currently working on bringing you</p>
                    <h2>
                        the <a style={{ color: 'blue' }}>only</a> finance app
                    </h2>
                    <p>you'll ever need</p>
                    <div style={{ height: '10%' }} />
                    <h2>
                        Interested in our{' '}
                        <a style={{ color: 'green' }}>progress</a>?
                    </h2>
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
