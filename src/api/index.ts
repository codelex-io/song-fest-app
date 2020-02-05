import ApolloClient from 'apollo-boost';
import { initCache, cache } from './cache';

const CMS_URI = 'https://api-euwest.graphcms.com/v1/ck66f9j5b0tvp01fl2vtp08sh/master';

let client: ApolloClient<unknown>;

const initApollo = async () => {
    await initCache();
    client = new ApolloClient({
        uri: CMS_URI,
        cache,
    });
};

const getClient = () => client;

export { initApollo, getClient };
