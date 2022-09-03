import Layout from '@components/Layout';
import Modal from '@components/Modal';
import { ENDPOINTS } from '@consts/Endpoints';
import { Firebase } from '@consts/Firebase';
import { Pool, Tank } from '@model/pool';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import {
    PlaidLinkOnSuccessMetadata,
    PlaidLinkOptions,
    usePlaidLink
} from 'react-plaid-link';

export default function Tanks() {
    return (
        <Layout
            style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                padding: 10
                // background: 'green'
            }}
        >
            <div
                style={{
                    margin: 10,
                    background: '#ACC2D6',
                    borderRadius: 10
                }}
            >
                <div
                    style={{
                        paddingLeft: 10
                    }}
                >
                    <h1>Recently Viewed</h1>
                    <CreateTankButton />
                </div>
                <TankList
                    tanks={[
                        {
                            id: 'ipoltest1',
                            name: 'test1',
                            amount: '$1.00',
                            image: '/images/favicon.png',
                            isPrivate: true,
                            members: null
                        },
                        {
                            id: 'ipoltest2',
                            name: 'long name',
                            amount: '$2.00',
                            image: '/images/favicon.png',
                            isPrivate: true,
                            members: null
                        },
                        {
                            id: 'ipoltest3',
                            name: 'another long name',
                            amount: '$3.00',
                            image: '/images/favicon.png',
                            isPrivate: false,
                            members: null
                        }
                    ]}
                />
            </div>
        </Layout>
    );
}

type TankListProps = {
    tanks: Tank[];
};

function TankList(props: TankListProps) {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                // background: 'yellow',
                margin: 10
            }}
        >
            {props.tanks.map((pool: Pool) => {
                return <TankListEntry tank={pool} />;
            })}
        </div>
    );
}

type TankListEntryProps = {
    tank: Tank;
};

function TankListEntry(props: TankListEntryProps) {
    const [isModal, setIsModal] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);

    console.log('isModal', isModal);

    return (
        <>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    background: isModal ? 'lightgrey' : 'white',

                    borderRadius: 5,
                    padding: 5,
                    margin: 3,

                    cursor: 'pointer'
                }}
                onClick={() => setIsModal(true)}
            >
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                    }}
                >
                    <div
                        style={{
                            flex: 1
                        }}
                    >
                        <Image
                            width="30px"
                            height="30px"
                            src={props.tank.image}
                        />
                    </div>
                    <p
                        style={{
                            flex: 2,
                            padding: 5
                            // background: 'pink'
                        }}
                    >
                        {props.tank.name}
                    </p>
                    <div
                        style={{
                            flex: 1,
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'flex-start',
                            alignItems: 'center'
                        }}
                    >
                        {props.tank.isPrivate ? (
                            <Image
                                width="15px"
                                height="15px"
                                src={'/images/lock.svg'}
                            />
                        ) : null}
                    </div>
                    <p style={{ flex: 1 }}>{props.tank.amount}</p>
                    <div
                        style={{
                            flex: 1,
                            display: 'flex'
                        }}
                    >
                        <div
                            style={{
                                cursor: 'pointer'
                            }}
                            onClick={(e) => {
                                e.stopPropagation();
                                setIsExpanded(!isExpanded);
                            }}
                        >
                            {isExpanded ? (
                                <Image
                                    width="15px"
                                    height="15px"
                                    src={'/images/up-arrow.svg'}
                                />
                            ) : (
                                <Image
                                    width="15px"
                                    height="15px"
                                    src={'/images/down-arrow.svg'}
                                />
                            )}
                        </div>
                    </div>
                </div>
                {isExpanded ? (
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center',
                            margin: 10
                        }}
                    >
                        <div
                            style={{
                                flex: 1,
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'flex-start'
                                // alignContent: 'center'
                            }}
                        >
                            <div>
                                <p>Members</p>
                            </div>
                            <div>
                                <p>Last Transaction</p>
                            </div>
                            <div>
                                <p>Created</p>
                            </div>
                        </div>
                        <div
                            style={{
                                flex: 1,
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'flex-start'
                                // alignContent: 'center'
                            }}
                        >
                            <div>
                                <p>Members</p>
                            </div>
                            <div>
                                <p>Last Transaction</p>
                            </div>
                            <div>
                                <p>Created</p>
                            </div>
                        </div>
                    </div>
                ) : null}
            </div>
            {isModal ? (
                <TankListEntryModal
                    tank={props.tank}
                    onClick={() => setIsModal(false)}
                />
            ) : null}
        </>
    );
}

type TankListEntryModal = {
    tank: Tank;
    onClick: () => void;
};

function TankListEntryModal(props: TankListEntryModal) {
    return (
        <Modal onClick={props.onClick}>
            <h1>{props.tank.name}</h1>
        </Modal>
    );
}

function CreateTankButton() {
    const [isCreating, setIsCreating] = useState(false);

    return (
        <>
            <div onClick={() => setIsCreating(true)}>New</div>
            {isCreating ? (
                <Modal onClick={() => setIsCreating(false)}>
                    <CreateTank />
                </Modal>
            ) : null}
        </>
    );
}

function CreateTank() {
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
