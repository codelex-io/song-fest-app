import React, { useEffect, useState } from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import SplashScreen from 'react-native-splash-screen';
import { getClient, initApollo } from './src/api';
import { initFavourites, FavouritesContextProvider } from './src/domain/favourites';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { LocalizationContextProvider } from './src/localization/LocalizationContext';
import { initLanguage } from './src/localization';
import { initSettings, SettingsContextProvider } from './src/domain/settings';
import { useStoryBook, StoryBookContextProvider } from './src/domain/storybook';
import { init } from './src/notifications';
import Navigation from './src/navigation';
import Storybook from './storybook';
import { StatusBarWrapper } from './src/components'
import {NativeModules} from 'react-native';

const bootstrap = async () => Promise.all([
    initApollo(),
    initFavourites(),
    initLanguage(),
    initSettings(),
    init(),
    new Promise(resolve => setTimeout(resolve, 1500))
]);

const App: React.FC = () => {
    const [isLoaded, setLoaded] = useState<boolean>(false);
    const { isStoryBookActive } = useStoryBook();
    useEffect(() => {
        bootstrap().then(() => {
            SplashScreen.hide();
            setLoaded(true);

            const AppDelegate = NativeModules.AppDelegate;
            console.log(AppDelegate.showReactApp)
            AppDelegate.showReactApp();
        });
    }, []);
    if (!isLoaded) {
        return <></>;
    }

    if (isStoryBookActive) {
        return <Storybook />;
    }

    return (
        <LocalizationContextProvider>
            <SafeAreaProvider>
                <ApolloProvider client={getClient()}>
                    <FavouritesContextProvider>
                        <SettingsContextProvider>
                            <Navigation />
                        </SettingsContextProvider>
                    </FavouritesContextProvider>
                </ApolloProvider>
            </SafeAreaProvider>
        </LocalizationContextProvider>
    );
};

export default () => (
    <StoryBookContextProvider>
        <StatusBarWrapper>
            <App />
        </StatusBarWrapper>
    </StoryBookContextProvider>
);
