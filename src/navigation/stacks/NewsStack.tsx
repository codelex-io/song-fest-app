import React from 'react';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import { NewsListViewIndex } from '@views/NewsListView';
import { Header } from '@components';
import { RouteProp } from '@react-navigation/native';
import { FavouriteGroupKey } from '@domain/favourites/types';
import addSharedStacks from './SharedStack';

export type NewsStackParamsList = {
    NEWS: undefined;
    Favorites: undefined;
    Article: { itemId: string, group: FavouriteGroupKey }
    Search: undefined
}

export type NewsStackNavParams<T extends keyof NewsStackParamsList> = {
    navigation: StackNavigationProp<NewsStackParamsList, T>;
    route: RouteProp<NewsStackParamsList, T>;
};


const NewsStack: React.FC = () => {
    const Stack = createStackNavigator<NewsStackParamsList>();
    return (
        <Stack.Navigator initialRouteName="NEWS">
            <Stack.Screen
                name="NEWS"
                options={({ navigation }) => ({
                    header: () => <Header title={'JAUNUMI'} navigate={navigation.navigate} />,
                })}
                component={NewsListViewIndex}
            />
            {addSharedStacks(Stack)}
        </Stack.Navigator>
    );
};

export default NewsStack;
