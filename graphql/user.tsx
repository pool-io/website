import { gql } from '@apollo/client';

export const QUERY_GET_USER = gql`
    query GetUser($id: ID) {
        user(id: $id) {
            id
            username
            bio
        }
    }
`;

export const MUTATION_USER_EDIT = gql`
    mutation UserEdit($input: UserEditInput!) {
        userEdit(input: $input) {
            code
            success
            message
            user {
                id
                exists
                username
                bio
            }
        }
    }
`;
