import styles from './layout.module.css';
import Head from 'next/head';
import Header from '@components/header';

type LayoutProps = {
    route: string;
    children: React.ReactNode;
};

export default function Layout(props: LayoutProps) {
    return (
        <>
            <Head>
                <title>poolet.io</title>
                <link
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                    href="/images/favicon.png"
                />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <Header route={props.route} />
            <div className={styles.container}>{props.children}</div>
        </>
    );
}
