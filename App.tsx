import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import Navigation from './src/navigation';

const client = new ApolloClient({
    uri: 'https://api-euwest.graphcms.com/v1/ck66f9j5b0tvp01fl2vtp08sh/master',
});

const App: React.FC = () => {
    return (
        <ApolloProvider client={client}>
            <Navigation />
        </ApolloProvider>
    );
};

export default App;
