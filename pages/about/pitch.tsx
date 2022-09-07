import Layout from '@components/Layout';

export default function SoungBaeKim() {
    return (
        <Layout>
            <div
                style={{
                    display: 'flex',
                    color: '#8E5572',
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    marginTop: 100,
                    width: '100vw',
                    height: '100vh'
                }}
            >
                <h1>All with Pool</h1>
                <h2>Learn your money</h2>
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
                        <h2>Social finance</h2>
                    </div>
                    <div>
                        <h2>Collective spending</h2>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
