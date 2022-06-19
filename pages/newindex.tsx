import Layout from '@components/Layout';
import Drop, { LogoBottom, LogoTop } from '@components/Drop';
import Link from 'next/link';

function Header() {
    return (
        <div
            style={{
                display: 'flex',
                // justifyContent: 'space-between',
                alignItems: 'center',
                height: 100,
                width: '100vw',
                background: 'black',
                position: 'fixed',
                paddingLeft: '60vw',
                top: 0,
                left: 0
            }}
        >
            <a
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'right',
                    background: 'black',
                    color: 'white'
                }}
                href="/learn"
            >
                <h1 style={{ textAlign: 'right', fontSize: 20 }}>Learn</h1>
            </a>
            <div style={{ width: '8vw' }}></div>
            {/* wrap div with onclick link to about/austin */}
            <a
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'right',
                    background: 'black',
                    color: 'white'
                }}
                href="/main"
            >
                <h1 style={{ textAlign: 'right', fontSize: 20 }}>About</h1>
            </a>
            <div style={{ width: '8vw' }}></div>
            <a
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'right',
                    background: 'black',
                    color: 'white'
                }}
                href="/portal"
            >
                <h1 style={{ textAlign: 'right', fontSize: 20 }}>Log In</h1>
            </a>
        </div>
    );
}

export default function Blog() {
    console.log('land');
    return (
        <Layout route="/blog" header={<Header />}>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    background: 'black',
                    marginTop: 100,
                    width: '100vw',
                    height: '100vh'
                }}
            >
                <h1
                    style={{
                        fontSize: 150,
                        fontFamily: 'Neuton',
                        fontWeight: 'normal',
                        color: 'white'
                    }}
                >
                    Pool It.
                </h1>
                {/* make a onclick function that links /about/pitch */}
                <a href="/about/pitch">
                    <LogoTop width={420} height={420} />
                </a>
                {/* <Link href="/about/pitch" /> */}
                <div style={{ height: 300 }} />
                <LogoBottom width={840} height={840} color={'white'} />
            </div>
        </Layout>
    );
}
