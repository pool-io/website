import Layout from '@components/Layout';
import Image from 'next/image';

export default function Caleb() {
    return (
        <Layout>
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
                <h1>CALEB PARK</h1>
                <h2>GIMME YO MOONEY</h2>
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        color: 'white',
                        background: 'rgb(4 179 237)',
                        justifyContent: 'space-between',
                        width: '70vw'
                    }}
                >
                    <h3>Pool</h3>
                    <h3>then</h3>
                    <h3>Bool</h3>
                </div>
            </div>
        </Layout>
    );
}
