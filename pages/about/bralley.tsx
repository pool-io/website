import Layout from '@components/Layout';
import Image from 'next/image';

export default function Learn() {
    return (
        <Layout route="/learn">
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    marginTop: 100,
                    width: '100vw',
                    height: '100vh'
                }}
            >
                <h1>cum bucket</h1>
                <p>lemme get a sip</p>
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                        marginTop: 100,
                        width: '100vw',
                        height: '100vh'
                    }}
                >
                    <h1>mmmmm pEniS</h1>
                </div>
                <div style={{ height: 100 }} />
                <h1>you looked gayass</h1>
                <Image src="/images/penis.jpg" width={400} height={1000} />
            </div>
        </Layout>
    );
}
