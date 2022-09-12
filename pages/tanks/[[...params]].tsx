import { gql, useQuery } from '@apollo/client';
import Layout from '@components/Layout';
import Loading from '@components/Loading';
import { Firebase } from '@consts/Firebase';
import { Pool, Tank, Drain } from '@model/pool';
import Modal from '@components/Modal';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import {
    PlaidLinkOnSuccessMetadata,
    PlaidLinkOptions,
    usePlaidLink
} from 'react-plaid-link';

type Item = {
    id: string;
    institution: Institution;
    accounts: Accounts;
};

type Items = {
    items: Item[];
    next: string;
};

type Institution = {
    id: string;
    name: string;
};

type Account = {
    id: string;
    name: string;
    balance: Balance;
};

type Accounts = {
    accounts: Account[];
    next: string;
};

type Balance = {
    current: number;
    available: number;
    limit: number;
    isoCurrencyCode: string;
    unofficialCurrencyCode: string;
    lastUpdatedDatetime: string;
};

export default function Plaid() {
    type Response = {
        plaid: {
            items: Items;
        };
    };

    const { loading, data, error } = useQuery<Response>(
        gql`
            query Plaid(
                $itemsPagination: Pagination!
                $accountsPagination: Pagination!
            ) {
                plaid {
                    items(pagination: $itemsPagination) {
                        items {
                            id
                            institution {
                                id
                                name
                            }
                            accounts(pagination: $accountsPagination) {
                                accounts {
                                    id
                                    name
                                    balance {
                                        current
                                        available
                                        limit
                                        isoCurrencyCode
                                        unofficialCurrencyCode
                                        lastUpdatedDatetime
                                    }
                                }
                                next
                            }
                        }
                        next
                    }
                }
            }
        `,
        {
            variables: {
                itemsPagination: { limit: 100 },
                accountsPagination: { limit: 100 }
            }
        }
    );

    console.log('plaid data: ', data);
    console.log('plaid err: ', error);

    return (
        <Layout
            style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                padding: 10
            }}
        >
            {loading ? (
                <Loading />
            ) : (
                <div
                    style={{
                        margin: 10,
                        background: '#ACC2D6',
                        borderRadius: 10
                    }}
                >
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            paddingLeft: 10,
                            paddingRight: 50,
                            justifyContent: 'space-between',
                            alignItems: 'center'
                        }}
                    >
                        <h1>Tanks</h1>
                        <CreateTankButton />
                    </div>

                    <div>
                        {data?.plaid.items.items.map((item: Item) => (
                            <Item key={item.id} item={item} />
                        ))}
                    </div>
                </div>
            )}
        </Layout>
    );
}

type ItemProps = {
    item: Item;
};

function Item(props: ItemProps) {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                margin: 10,
                padding: 10,
                background: 'white',
                borderRadius: '10px'
            }}
        >
            <p>
                {props.item.institution.name}
                {/* [{props.item.institution.id}] */}
            </p>
            {/* <p>item_id: {props.item.id}</p> */}

            <div>
                {props.item.accounts.accounts.map((account: Account) => (
                    <Account key={account.id} account={account} />
                ))}
            </div>
        </div>
    );
}

type AccountProps = {
    account: Account;
};

function Account(props: AccountProps) {
    const [isModal, setIsModal] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);
    console.log('isModal', isModal);
    return (
        <>
            <div
                style={{
                    display: 'flex',
                    background: '#f0f0f0',
                    margin: 10,
                    cursor: 'pointer',
                    padding: 10,
                    borderRadius: '10px'
                }}
                onClick={() => setIsModal(true)}
            >
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        flex: 1
                    }}
                >
                    <p>
                        {props.account.name}
                        {/* [{props.account.id}] */}
                    </p>
                    <p>${props.account.balance.available}</p>
                    {isExpanded ? <></> : null}
                </div>
            </div>
            {isModal ? (
                <AccountModal
                    account={props.account}
                    onClick={() => setIsModal(false)}
                />
            ) : null}
        </>
    );
}

type AccountModalProps = {
    account: Account;
    onClick: () => void;
};

function AccountModal(props: AccountModalProps) {
    return (
        <Modal onClick={props.onClick}>
            <div>
                <p>Current: ${props.account.balance.current}</p>
                <p>Available: ${props.account.balance.available}</p>
                <p>Limit: ${props.account.balance.limit}</p>
            </div>
        </Modal>
    );
}

// make tanks
function CreateTankButton() {
    const [isCreating, setIsCreating] = useState(false);

    return (
        <>
            <div
                style={{
                    background: 'white',

                    padding: 7,
                    borderRadius: 10
                }}
                onClick={() => setIsCreating(true)}
            >
                +
            </div>
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
                return fetch(
                    process.env.NEXT_PUBLIC_ENDPOINT +
                        '/plaid/create_link_token',
                    {
                        method: 'POST',
                        headers: {
                            authorization: token
                        }
                    }
                );
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
                        process.env.NEXT_PUBLIC_ENDPOINT +
                            '/plaid/exchange_public_token',
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
