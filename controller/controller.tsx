import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    useQuery,
    gql
} from '@apollo/client';
import {
    Controller as IController,
    UsersService as IUsersService
} from './model';
import UsersService from './users';

class Controller implements IController {
    users: IUsersService;

    constructor(url: string) {
        const client = new ApolloClient({
            uri: url,
            cache: new InMemoryCache()
        });

        this.users = new UsersService(client);
    }

    connect(url: string): Promise<void> {
        return Promise.reject();
    }
}

export default new Controller('http://localhost:8080/graphql');
