import styles from './layout.module.css';
import Head from 'next/head';
import Header from '@components/header';

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className={styles.container}>
            <Head>
                <title>poolet.io</title>
                <link
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                    href="/favicon.png"
                />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <Header />
            <div>{children}</div>
        </div>
    );
}
