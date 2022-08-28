import Layout from '@components/Layout';
import { POOL_TYPE } from '@consts/pool';
import { ReactNode, useState } from 'react';
import { PoolBoxContainer, PoolBoxProps } from './components/PoolBox';

const DUMMY_POOLS = [
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

export default function Portal() {
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
                <Sidebar />
                <div
                    style={{
                        display: 'flex',
                        flex: 1,
                        paddingTop: '100px', // TODO: fix for header
                        background: 'green'
                    }}
                >
                    <PoolBoxContainer pools={DUMMY_POOLS} />
                </div>
            </div>
        </Layout>
    );
}

type QueryParams = {
    poolTypes: POOL_TYPE[];
};

type SidebarProps = {
    onQueryParms: (_: QueryParams) => QueryParams;
};

function Sidebar(props: SidebarProps) {
    return (
        <div
            style={{
                paddingTop: '100px', // TODO: fix for header
                // height: '100%',
                width: '200px',
                background: 'yellow',
                overflow: 'auto'
            }}
        >
            <SidebarEntry name="Types">
                <h1>All</h1>
                <h1>Pools</h1>
                <h1>Tanks</h1>
                <h1>Drains</h1>
            </SidebarEntry>
            <SidebarEntry name="Level">
                <h1>L0</h1>
            </SidebarEntry>
            <SidebarEntry name="Permission">
                <h1>Owner</h1>
                <h1>Admin</h1>
                <h1>Member</h1>
                <h1>Viewer</h1>
            </SidebarEntry>
        </div>
    );
}

type SidebarEntryProps = {
    name: string;
    children: ReactNode;
};

function SidebarEntry(props: SidebarEntryProps) {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                // justifyContent: 'center',
                // alignItems: 'normal',
                background: 'lightgreen'
            }}
        >
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    alignItems: 'center',
                    background: 'pink',
                    cursor: 'pointer'
                }}
                onClick={() => setIsExpanded(!isExpanded)}
            >
                <h1>{props.name}</h1>
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                >
                    <p style={{ fontSize: '20px' }}>+</p>
                </div>
            </div>
            {isExpanded ? props.children : null}
        </div>
    );
}
