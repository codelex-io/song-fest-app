import React, { useEffect, useState } from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import SplashScreen from 'react-native-splash-screen';
import { getClient, initApollo } from './src/api';
import Navigation from './src/navigation';

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
        <ApolloProvider client={getClient()}>
            <Navigation />
        </ApolloProvider>
    );
};

export default App;
