import Layout from '@components/Layout';

export default function Dashboard() {
    return (
        <Layout
            style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            <p
                style={{
                    fontSize: 30,
                    color: 'grey'
                }}
            >
                Add Dashboards
            </p>
        </Layout>
    );
}
