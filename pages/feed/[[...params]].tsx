import Layout from '@components/Layout';

export default function Feed() {
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
                SMC Singular
            </p>
        </Layout>
    );
}
