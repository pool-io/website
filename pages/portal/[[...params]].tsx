import Layout from '@components/Layout';
import { PoolBoxContainer, PoolBoxProps } from './components/PoolBox';

export default function Portal() {
    function getPools(): PoolBoxProps[] {
        return [
            {
                id: 'ipolA',
                name: 'test1',
                image: '',
                description: 'first test pool',
                members: 1
            },
            {
                id: 'ipolB',
                name: 'test2',
                image: '',
                description: 'second test pool',
                members: 1
            },
            {
                id: 'ipolB',
                name: 'test2',
                image: '',
                description: 'second test pool',
                members: 1
            },
            {
                id: 'ipolB',
                name: 'test2',
                image: '',
                description: 'second test pool',
                members: 1
            },
            {
                id: 'ipolB',
                name: 'test2',
                image: '',
                description: 'second test pool',
                members: 1
            },
            {
                id: 'ipolB',
                name: 'test2',
                image: '',
                description: 'second test pool',
                members: 1
            },
            {
                id: 'ipolB',
                name: 'test2',
                image: '',
                description: 'second test pool',
                members: 1
            },
            {
                id: 'ipolB',
                name: 'test2',
                image: '',
                description: 'second test pool',
                members: 1
            },
            {
                id: 'ipolB',
                name: 'test2',
                image: '',
                description: 'second test pool',
                members: 1
            },
            {
                id: 'ipolB',
                name: 'test2',
                image: '',
                description: 'second test pool',
                members: 1
            },
            {
                id: 'ipolB',
                name: 'test2',
                image: '',
                description: 'second test pool',
                members: 1
            },
            {
                id: 'ipolB',
                name: 'test2',
                image: '',
                description: 'second test pool',
                members: 1
            },
            {
                id: 'ipolB',
                name: 'test2',
                image: '',
                description: 'second test pool',
                members: 1
            },
            {
                id: 'ipolB',
                name: 'test2',
                image: '',
                description: 'second test pool',
                members: 1
            }
        ];
    }

    return (
        <Layout route="/portal" isDark={true}>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    // justifyContent: 'stretch',
                    // alignItems: 'stretch',
                    background: 'white',
                    height: '100vh',
                    width: '100vw'
                }}
            >
                <div
                    style={{
                        paddingTop: '100px', // TODO: fix for header
                        // height: '100%',
                        width: '200px',
                        background: 'yellow'
                    }}
                >
                    <h1>hello</h1>
                </div>
                <div
                    style={{
                        display: 'flex',
                        flex: 1,
                        paddingTop: '100px', // TODO: fix for header
                        background: 'green'
                    }}
                >
                    <PoolBoxContainer pools={getPools()} />
                </div>
            </div>
        </Layout>
    );
}
