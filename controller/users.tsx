import { ApolloClient, NormalizedCacheObject, gql } from '@apollo/client';
import { User, UsersService as IUsersService } from './model';

export default class UsersService implements IUsersService {
    private client: ApolloClient<NormalizedCacheObject>;

    constructor(client: ApolloClient<NormalizedCacheObject>) {
        this.client = client;
    }

    async getUser(id: string): Promise<User> {
        const response = await this.client.query({
            query: gql`
                query {
                    user(id: $id) {
                        id
                        username
                    }
                }
            `,
            variables: {
                id: id
            }
        });

        response.data;

        return Promise.reject();
    }
}
