import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'
import Header from '../components/header'

export default function Home() {
    return (
        <div className=''>
            <Head>
                <title>poolet.io</title>
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon.png"/>
            </Head>
            <Header></Header>

            <h1>poolet.io</h1>
            <p>One place to manage all your finances</p>
            <Link href="/about">
                <a>learn more</a>
            </Link>
        </div>
    )
}