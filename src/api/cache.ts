import AsyncStorage from '@react-native-community/async-storage';
import { CachePersistor } from 'apollo-cache-persist';
import { persistCache } from 'apollo-cache-persist';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { AnyType } from '@domain/AnyType';

// https://github.com/apollographql/apollo-cache-persist/issues/75
const storage = AsyncStorage as AnyType;

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
