import { AppProps } from 'next/app';
import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    createHttpLink
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import '../styles/global.css';
import { Firebase } from '@consts/Firebase';
import { ENDPOINTS } from '@consts/Endpoints';

const httpLink = createHttpLink({
    uri: `${ENDPOINTS.SERVICE}/graphql`
});

const authLink = setContext(async (_, { headers }) => {
    // get the authentication token from local storage if it exists
    const token = await Firebase.auth.currentUser.getIdToken();
    // return the headers to the context so httpLink can read them
    return {
        headers: {
            ...headers,
            authorization: token
        }
    };
});

const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache()
});

export default function App({ Component, pageProps }: AppProps) {
    return (
        <ApolloProvider client={client}>
            <Component {...pageProps} />
        </ApolloProvider>
    );
}
