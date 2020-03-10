import React, { useEffect, useState } from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
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
import { StatusBarWrapper } from './src/components';
import { hideSplashScreen } from './src/splash';

const bootstrap = async (isRealDevice: boolean) =>
    Promise.all([
        initApollo(),
        initFavourites(),
        initLanguage(),
        initSettings(),
        init(isRealDevice),
        new Promise(resolve => setTimeout(resolve, 3000)),
    ]);

interface Props {
    isRealDevice: boolean;
}

const App: React.FC<Props> = ({ isRealDevice }) => {
    const [isLoaded, setLoaded] = useState<boolean>(false);
    const { isStoryBookActive } = useStoryBook();
    useEffect(() => {
        bootstrap(isRealDevice).then(() => {
            setLoaded(true);
            hideSplashScreen();
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

export default ({ isRealDevice }: Props) => (
    <StoryBookContextProvider>
        <StatusBarWrapper>
            <App isRealDevice={isRealDevice} />
        </StatusBarWrapper>
    </StoryBookContextProvider>
);
