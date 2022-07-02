import Layout from '@components/Layout';
import Modal from '@components/Modal';
import Add from '@components/svg/Add';
import { ENDPOINTS } from '@consts/Endpoints';
import { Firebase } from '@consts/Firebase';
import { URL_PARAMS } from '@portal/consts';
import { useRouter } from 'next/router';
import { ReactNode, useEffect, useState } from 'react';
import {
    usePlaidLink,
    PlaidLinkOptions,
    PlaidLinkOnSuccess,
    PlaidLinkOnSuccessMetadata
} from 'react-plaid-link';

type SideBarProps = {
    setPage(page: Page): void;
};

function SideBar(props: SideBarProps) {
    function Tab(props: { onClick(): void; children: ReactNode }) {
        return (
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    background: 'yellow',
                    cursor: 'pointer'
                }}
                onClick={() => props.onClick()}
            >
                {props.children}
            </div>
        );
    }

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
                alignItems: 'stretch',
                overflow: 'hidden'
            }}
        >
            <Tab onClick={() => props.setPage(Page.POOLS)}>
                <h1>Pools</h1>
            </Tab>
            <Tab onClick={() => props.setPage(Page.TANKS)}>
                <h1>Tanks</h1>
            </Tab>
            <Tab onClick={() => props.setPage(Page.DRAINS)}>
                <h1>Drains</h1>
            </Tab>
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

function Main(props: { children: ReactNode }) {
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
            {props.children}
        </div>
    );
}

function MainList(props: { children: ReactNode }) {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignItems: 'strech',
                overflow: 'auto'
            }}
        >
            {props.children}
        </div>
    );
}

function MainListEntry(props: { color?: string; children: ReactNode }) {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'flex-start',
                alignItems: 'center',
                background: props.color ? props.color : 'lightblue',
                borderRadius: 25,
                paddingLeft: 25,
                margin: 10
            }}
        >
            {props.children}
        </div>
    );
}

function PoolEntry(props: { name: string; isPrivate: boolean; total: number }) {
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
        <MainListEntry>
            <Container>
                <h1>{props.name}</h1>
            </Container>
            <Container>
                <h1>{props.isPrivate ? 'PRIVATE' : 'PUBLIC'}</h1>
            </Container>
            <Container>
                <h1>${props.total}</h1>
            </Container>
        </MainListEntry>
    );
}

function Pools() {
    return (
        <Main>
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
            <MainList>
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
            </MainList>
        </Main>
    );
}

function PlaidLink(props: { linkToken: string }) {
    console.log('PlaidLink: ', props.linkToken);

    const config: PlaidLinkOptions = {
        onSuccess: (
            public_token: string,
            metadata: PlaidLinkOnSuccessMetadata
        ) => {
            Firebase.auth.currentUser
                .getIdToken()
                .then((token: string) => {
                    return fetch(
                        ENDPOINTS.SERVICE + '/plaid/exchange_public_token',
                        {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                                Authorization: token
                            },
                            body: Buffer.from(
                                JSON.stringify({ public_token, metadata })
                            )
                        }
                    );
                })
                .catch((err) => console.log(err));
        },
        onExit: (err, metadata) => {},
        onEvent: (eventName, metadata) => {},
        token: props.linkToken
        //required for OAuth; if not using OAuth, set to null or omit:
        // receivedRedirectUri: window.location.href
    };
    const { open, exit, ready } = usePlaidLink(config);

    useEffect(() => {
        if (ready) {
            open();
        }
    }, [ready]);

    return <div />;
}

function CreateTank(props: { handleClose(): void }) {
    const [linkToken, setLinkToken] = useState('');

    useEffect(() => {
        Firebase.auth.currentUser
            .getIdToken()
            .then((token: string) => {
                return fetch(ENDPOINTS.SERVICE + '/plaid/create_link_token', {
                    method: 'POST',
                    headers: {
                        authorization: token
                    }
                });
            })
            .then((resp: Response) => {
                if (!resp.ok) {
                    throw `[${resp.status}] ${resp.body}`;
                }

                return resp.json();
            })
            .then((response: any) => {
                const link_token = response?.link_token;
                console.log('link_token: ', link_token);
                setLinkToken(link_token);
            })
            .catch((err) => console.log('error in setting up link', err));
    }, []);

    return (
        <>
            <div>
                <h1>Create Tank</h1>
            </div>
            {linkToken ? (
                <>
                    <PlaidLink linkToken={linkToken} />
                </>
            ) : null}
        </>
    );
}

function CreateTankButton() {
    const [isCreating, setIsCreating] = useState(false);

    return (
        <>
            {isCreating ? (
                <Modal onClick={() => setIsCreating(false)}>
                    <CreateTank handleClose={() => setIsCreating(false)} />
                </Modal>
            ) : null}
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
                <Add height="10px" width="10px" />
            </button>
        </>
    );
}

function TankEntry(props: { name: string; isPrivate: boolean; total: number }) {
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
        <MainListEntry color="lightgreen">
            <Container>
                <h1>{props.name}</h1>
            </Container>
            <Container>
                <h1>{props.isPrivate ? 'PRIVATE' : 'PUBLIC'}</h1>
            </Container>
            <Container>
                <h1>${props.total}</h1>
            </Container>
        </MainListEntry>
    );
}

function Tanks() {
    return (
        <Main>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                <h1>Tanks</h1>
                <CreateTankButton />
            </div>
            <MainList>
                <TankEntry name={'t/hello'} isPrivate={false} total={10.1} />
            </MainList>
        </Main>
    );
}

function DrainEntry(props: {
    name: string;
    isPrivate: boolean;
    total: number;
}) {
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
        <MainListEntry color="yellow">
            <Container>
                <h1>{props.name}</h1>
            </Container>
            <Container>
                <h1>{props.isPrivate ? 'PRIVATE' : 'PUBLIC'}</h1>
            </Container>
            <Container>
                <h1>${props.total}</h1>
            </Container>
        </MainListEntry>
    );
}

function Drains() {
    return (
        <Main>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                <h1>Drains</h1>
            </div>
            <MainList>
                <DrainEntry name={'d/hello'} isPrivate={false} total={10.1} />
            </MainList>
        </Main>
    );
}

enum Page {
    POOLS,
    TANKS,
    DRAINS
}

function Portal() {
    const [page, setPage] = useState<Page>(Page.POOLS);

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
                    <SideBar setPage={(page: Page) => setPage(page)} />
                    {(() => {
                        switch (page) {
                            case Page.POOLS:
                                return <Pools />;
                            case Page.TANKS:
                                return <Tanks />;
                            case Page.DRAINS:
                                return <Drains />;
                            default:
                                return <Pools />;
                        }
                    })()}
                </div>
            </div>
        </Layout>
    );
}

export default function () {
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
