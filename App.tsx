import React, { useEffect, useState } from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
import { ApolloProvider } from '@apollo/react-hooks';
import { getClient, initApollo } from './src/api';
import { initFavourites, FavouritesContextProvider } from './src/domain/favourites';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { LocalizationContextProvider } from './src/localization/LocalizationContext';
import { initLanguage } from './src/localization';
import { initSettings, SettingsContextProvider } from './src/domain/settings';
import { useStoryBook, StoryBookContextProvider } from './src/domain/storybook';
import { initNotifications, postLaunch } from './src/integration/notifications';
import Navigation from './src/navigation';
import Storybook from './storybook';
import { colors } from './src/styles';
import { statusBarHeight } from './src/utils';
import { hideSplashScreen } from './src/splash';

const bootstrap = async (isRealDevice: boolean) =>
    Promise.all([
        initApollo(),
        initFavourites(),
        initLanguage(),
        initSettings(),
        initNotifications(isRealDevice),
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
            postLaunch();
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
        <View style={{ height: 0 }}>
            <StatusBar translucent barStyle="dark-content" backgroundColor={'transparent'} />
        </View>
        <View style={styles.container}>
            <View style={styles.content}>
                <App isRealDevice={isRealDevice} />
            </View>
        </View>
    </StoryBookContextProvider>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        flex: 1,
        backgroundColor: colors.white,
    },
});
