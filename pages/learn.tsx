import Layout from '@components/Layout';

export default function Learn() {
    return (
        <Layout>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    marginTop: 500,
                    width: '100vw',
                    height: '100vh',
                    flexDirection: 'column',
                    alignItems: 'stretch'
                }}
            >
                <h1
                    style={{
                        textAlign: 'center'
                    }}
                >
                    Learn
                </h1>
                <h1
                    style={{
                        cursor: 'pointer',
                        fontSize: 120,
                        fontFamily: 'FoundersGrotesk',
                        borderBottom: '3px solid',
                        marginTop: 50
                    }}
                >
                    Frequently Asked Questions
                </h1>
            </div>
        </Layout>
    );
}

function QuestionBox() {}
