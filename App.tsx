import React, { useEffect, useState } from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import SplashScreen from 'react-native-splash-screen';
import { getClient, initApollo } from './src/api';
import { initFavourites, FavouritesContextProvider } from './src/domain/favourites';
import createNavigationContainer from './src/navigation';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { LocalizationContextProvider } from './src/localization/LocalizationContext';
import { initLanguage } from './src/localization';
import { initSettings, getUserType } from './src/domain/settings';
import { init } from './src/notifications';

const bootstrap = async () => Promise.all([initApollo(), initFavourites(), initLanguage(), initSettings(), init()]);

const App: React.FC = () => {
    const [isLoaded, setLoaded] = useState<boolean>(false);
    useEffect(() => {
        bootstrap().then(() => {
            SplashScreen.hide();
            setLoaded(true);
        });
    }, []);
    if (!isLoaded) {
        return <></>;
    }
    const Navigation = createNavigationContainer(getUserType())
    return (
        <LocalizationContextProvider>
            <SafeAreaProvider>
                <ApolloProvider client={getClient()}>
                    <FavouritesContextProvider>
                        <Navigation />
                    </FavouritesContextProvider>
                </ApolloProvider>
            </SafeAreaProvider>
        </LocalizationContextProvider>
    );
};

export default App;
