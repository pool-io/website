import styles from './layout.module.css';
import Head from 'next/head';
import Header from './header';

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
            </Head>
            <Header />
            <div>{children}</div>
        </div>
    );
}
