import Layout from '@components/Layout';

export default function Portal() {
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
                    fontStyle: 'italic',
                    color: 'grey'
                }}
            >
                Add custom widgets, graphs, and more
            </p>
        </Layout>
    );
}
