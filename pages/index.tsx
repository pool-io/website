import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Layout from '../components/layout'
import Header from '../components/header'

export default function Home() {
    return (
        <div className='container' style={{height: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
            <Head>
                <title>poolet.io</title>
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon.png"/>
            </Head>
            <Header></Header>

            <Image
                src="/logo.png"
                alt="by Daniel Lim"
                width={1000}
                height={500}
            />
            <p>One place to manage all your finances</p>
            <Link href="/about">
                <a>learn more</a>
            </Link>
          
        </div>
    )
}