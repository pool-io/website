import Head from 'next/head';
import Header from '@components/Header';
import Footer from '@components/Footer';

type LayoutProps = {
    route: string;
    header?: React.ReactNode;
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
                    href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@700&display=swap"
                    rel="stylesheet"
                />
            </Head>
            {/* <div className={styles.margin} /> */}
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    background: 'wheat'
                }}
            >
                {props.children}
                {/* <Footer /> */}
            </div>
            {/* Header is placed at the bottom so that it will be rendered at the top */}
            {props.header ? props.header : <Header route={props.route} />} 
        </>
    );
}
