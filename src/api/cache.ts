import AsyncStorage from '@react-native-community/async-storage';
import { CachePersistor } from 'apollo-cache-persist';
import { persistCache } from 'apollo-cache-persist';
import { InMemoryCache } from 'apollo-cache-inmemory';

// https://github.com/apollographql/apollo-cache-persist/issues/75
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const storage = AsyncStorage as any;

const cache = new InMemoryCache();

const cachePersistor = new CachePersistor({
    cache,
    storage,
    debug: __DEV__,
});

const initCache = async () => {
    await persistCache({ cache, storage });
    await cachePersistor.restore();
};

export { initCache, cache };
