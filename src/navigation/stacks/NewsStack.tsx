import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { NewsListViewIndex } from '@views/NewsListView';
import { Header } from '@components';

const Stack = createStackNavigator();

const NewsStack: React.FC = () => {
    const navigation = useNavigation();
    return (
        <Stack.Navigator initialRouteName="News">
            <Stack.Screen
                name="News"
                options={{
                    header: () => <Header title={'JAUNUMI'} navigate={navigation.navigate} />,
                }}
                component={NewsListViewIndex}
            />
        </Stack.Navigator>
    );
};

export default NewsStack;