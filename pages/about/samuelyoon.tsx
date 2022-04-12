import Layout from '@components/Layout';

export default function SamuelYoon() {
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
                <h1>Samuel Yoon</h1>
                <p>yoonam@bc.edu</p>
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        width: '50vw'
                    }}
                ></div>
            </div>
        </Layout>
    );
}
