import { gql } from '@apollo/client';

export const QUERY_GET_USER = gql`
    query GetUser($id: ID) {
        user(id: $id) {
            id
            username
        }
    }
`;

export const MUTATION_USER_UPDATE = gql`
    mutation UserUpdate($input: UserUpdateInput!) {
        userUpdate(input: $input) {
            code
            success
            message
            user {
                id
                exists
                username
            }
        }
    }
`;
