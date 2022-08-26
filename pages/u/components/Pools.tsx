import { useMutation, useQuery } from '@apollo/client';
import { gql } from '@apollo/client';

export const GET_USER_POOLS_QUERY = gql`
    query GetUserPools($id: ID) {
        user(id: $id) {
            pools {
                pools {
                    id
                    exists
                    name
                    description
                }
            }
        }
    }
`;

export type PoolsProps = {
    userID: string;
};

export function Pools(props: PoolsProps) {
    const { loading, data, error } = useQuery(GET_USER_POOLS_QUERY, {
        variables: { id: props.userID ? props.userID : null }
    });

    if (error) {
        console.error('error in graphql: ', error);
    }

    console.log('data: ', data);

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignItems: 'stretch',

                border: '1px solid black',
                borderRadius: 10,

                padding: 10
            }}
        >
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderBottom: '1px solid black'
                }}
            >
                <h1>Pools</h1>
            </div>

            {error ? (
                <h1>Oops, something went wrong</h1>
            ) : loading ? (
                <h1>Loading...</h1>
            ) : data?.pools ? (
                data.pools.map()
            ) : (
                <h1>No Viewable Pools</h1>
            )}
        </div>
    );
}

type PoolEntryProps = {
    name: string;
    amount: number;
    members: string[];
};

function PoolEntry(props: PoolEntryProps) {}
