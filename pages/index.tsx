import styles from './index.module.css';
import Link from 'next/link';
import Image from 'next/image';
import Layout from '@components/layout';
import Card from '@components/card';

export default function Home() {
    return (
        <Layout route="/">
            <Card>
                <h1>pool</h1>
                <p>One place to manage all your finances</p>
                <Link href="/about">
                    <a>learn more</a>
                </Link>
            </Card>
        </Layout>
    );
}
