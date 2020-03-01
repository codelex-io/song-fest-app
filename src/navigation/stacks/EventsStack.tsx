import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { EventListView, MarkdownEvent } from '@views';
import { Header, SimpleHeader } from '@components';

const Stack = createStackNavigator();

const NewsStack: React.FC = () => {
    const navigation = useNavigation();
    return (
        <Stack.Navigator initialRouteName="EVENTS">
            <Stack.Screen
                name="EVENTS"
                options={{
                    header: () => <Header title={'PASĀKUMI'} navigate={navigation.navigate} />,
                }}
                component={EventListView}
            />
            <Stack.Screen
                name="Single Event"
                options={{
                    header: () => <SimpleHeader title={''} goBack={navigation.goBack} />,
                }}
                component={MarkdownEvent}
            />
        </Stack.Navigator>
    );
};

export default NewsStack;
