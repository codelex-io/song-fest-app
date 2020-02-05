import React, { useEffect, useState } from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import SplashScreen from 'react-native-splash-screen';
import { getClient, initApollo } from './src/api';
import Navigation from './src/navigation';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { LocalizationProvider } from './src/localization/LocalizationContext';

const bootstrap = async () => Promise.all([initApollo()]);

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
    return (
        <LocalizationProvider>
            <SafeAreaProvider>
                <ApolloProvider client={getClient()}>
                    <Navigation />
                </ApolloProvider>
            </SafeAreaProvider>
        </LocalizationProvider>
    );
};

export default App;
