import Layout from '@components/Layout';
import Modal from '@components/Modal';
import { URL_PARAMS } from '@portal/consts';
import { useRouter } from 'next/router';
import { ReactNode, useState } from 'react';

function SideBar() {
    return (
        <div
            style={{
                width: 200,
                borderRadius: 20,
                background: 'white',

                margin: 25,

                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignItems: 'center'
            }}
        >
            <h1>Sidebar</h1>
            <h1>Tanks</h1>
            <h1>Drains</h1>
        </div>
    );
}

type PoolEntryProps = {
    name: string;
    isPrivate: boolean;
    total: number;
};

function PoolEntry(props: PoolEntryProps) {
    function Container(props: { children: ReactNode }) {
        return (
            <div
                style={{
                    flex: 1,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                {props.children}
            </div>
        );
    }

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'flex-start',
                alignItems: 'center',
                background: 'lightblue',
                borderRadius: 25,
                paddingLeft: 25,
                margin: 10
            }}
        >
            <Container>
                <h1>{props.name}</h1>
            </Container>
            <Container>
                <h1>{props.isPrivate ? 'PRIVATE' : 'PUBLIC'}</h1>
            </Container>
            <Container>
                <h1>${props.total}</h1>
            </Container>
        </div>
    );
}

type CreatePoolProps = {
    handleClose(): void;
};

function CreatePool(props: CreatePoolProps) {
    return (
        <div>
            <h1>CREATE POOL</h1>
        </div>
    );
}

function CreatePoolButton() {
    const [isCreating, setIsCreating] = useState(false);

    return isCreating ? (
        <Modal onClick={() => setIsCreating(false)}>
            <CreatePool handleClose={() => setIsCreating(false)} />
        </Modal>
    ) : (
        <button
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                border: '1px dashed black',
                margin: 3,
                padding: 7,
                borderRadius: 5,
                background: 'none',
                fontSize: 25,
                cursor: 'pointer'
            }}
            onClick={() => setIsCreating(true)}
        >
            New
        </button>
    );
}

function Main() {
    return (
        <div
            style={{
                borderRadius: 20,
                background: 'white',
                margin: 25,
                width: '50vw',

                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignItems: 'stretch'
            }}
        >
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'space-around',
                    alignContent: 'center'
                }}
            >
                <h1>Pools</h1>
                <CreatePoolButton />
            </div>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    alignItems: 'strech',
                    overflow: 'visible scroll'
                }}
            >
                <PoolEntry name={'p/food'} isPrivate={false} total={10.1} />
                <PoolEntry name={'p/hello'} isPrivate={false} total={10.1} />
                <PoolEntry name={'p/hello'} isPrivate={false} total={10.1} />
                <PoolEntry name={'p/hello'} isPrivate={false} total={10.1} />
                <PoolEntry name={'p/hello'} isPrivate={false} total={10.1} />
                <PoolEntry name={'p/hello'} isPrivate={false} total={10.1} />
                <PoolEntry name={'p/hello'} isPrivate={false} total={10.1} />
                <PoolEntry name={'p/hello'} isPrivate={false} total={10.1} />
                <PoolEntry name={'p/hello'} isPrivate={false} total={10.1} />
                <PoolEntry name={'p/hello'} isPrivate={false} total={10.1} />
                <PoolEntry name={'p/hello'} isPrivate={false} total={10.1} />
                <PoolEntry name={'p/hello'} isPrivate={false} total={10.1} />
                <PoolEntry name={'p/hello'} isPrivate={false} total={10.1} />
            </div>
        </div>
    );
}

function Portal() {
    return (
        <Layout route="/p">
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100vh',
                    width: '100vw'
                }}
            >
                <div
                    style={{
                        height: '80vh',
                        width: '100vw',

                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'flex-start',
                        alignItems: 'stretch'
                    }}
                >
                    <SideBar />
                    <Main />
                </div>
            </div>
        </Layout>
    );
}

export default function Pool() {
    const router = useRouter();
    const poolID = router.query[URL_PARAMS] ? router.query[URL_PARAMS][0] : '';

    return poolID ? (
        <Layout route={`/p/${poolID}`}>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',

                    height: '100vh',
                    width: '100vw',
                    background: '#f0f0f0'
                }}
            >
                <h1>{poolID}</h1>
            </div>
        </Layout>
    ) : (
        <Portal />
    );
}
