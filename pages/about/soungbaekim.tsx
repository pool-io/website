import Layout from '@components/Layout';

export default function SoungBaeKim() {
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
                <h1>Soung Bae Kim</h1>
                <p>sbkim@berkeley.edu</p>
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        width: '50vw'
                    }}
                >
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column'
                        }}
                    >
                        <h2>fwaygo</h2>
                    </div>
                    <div>
                        <h2>projectulterior</h2>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
