import { gql, useQuery } from '@apollo/client';
import Layout from '@components/Layout';
import Loading from '@components/Loading';
import { useEffect } from 'react';

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

type Response = {
    plaid: {
        items: Items;
    };
};

export default function Plaid() {
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
        <Layout>
            {loading ? (
                <Loading />
            ) : (
                <>
                    <h1>Items</h1>
                    <div>{data?.plaid.items.items.map(() => {})}</div>
                </>
            )}
        </Layout>
    );
}

type ItemProps = {
    item: Item;
};

function Item(props: ItemProps) {
    return (
        <div>
            <p>Item</p>
            <p>item_id: {props.item.id}</p>
            <p>ins_id: {props.item.institution.id}</p>
            <p>ins_name: {props.item.institution.name}</p>
        </div>
    );
}
