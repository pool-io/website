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
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'right',
                    background: 'black',
                    color: 'white'
                }}
            >
                <h1 style={{ textAlign: 'right', fontSize: 20 }}>Learn</h1>
            </div>
            <div style={{ width: '8vw' }}></div>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'right',
                    background: 'black',
                    color: 'white'
                }}
            >
                <h1 style={{ textAlign: 'right', fontSize: 20 }}>About</h1>
            </div>
            <div style={{ width: '8vw' }}></div>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'right',
                    background: 'black',
                    color: 'white'
                }}
            >
                <h1 style={{ textAlign: 'right', fontSize: 20 }}>Log In</h1>
            </div>
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
                <Link href="/about/pitch">
                    <LogoTop width={1100} height={1100} />
                </Link>
                <div style={{ height: 300 }} />
                <LogoBottom width={700} height={700} color={'white'} />
            </div>
        </Layout>
    );
}
