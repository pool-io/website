import styles from './layout.module.css'
import Head from 'next/head'

export default function Layout({ children }:{ children: React.ReactNode } ) {
    return (
        <div className={styles.container}>
            <Head>
                <title>poolet.io</title>
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon.png"/>
            </Head>
            <div>{children}</div>
        </div>
    )
}