import React from 'react';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import { SimpleHeader, Header } from '@components';
import { FavoriteListView, MarkdownEvent, SearchView, EventListView, VideoView, EmptyView, EventMapView } from '@views';
import SearchHeader from '@components/headers/SearchHeader';
import { FavouriteGroupKey } from '@domain/favourites/types';
import { RouteProp } from '@react-navigation/native';
import { AppTabsNavParams } from '..';
import { NewsListViewIndex } from '@views/NewsListView';

export type SharedStackParamsList = {
    Feed: { payload: string };
    Favorites: undefined;
    Article: { itemId: string; group: FavouriteGroupKey };
    Search: undefined;
};

export type SharedStackNavList<T extends keyof SharedStackParamsList> = {
    navigation: StackNavigationProp<SharedStackParamsList, T>;
    route: RouteProp<SharedStackParamsList, T>;
};

const SharedStack: React.FC<AppTabsNavParams<'NEWS' | 'EVENTS' | 'VIDEO' | 'MAP'>> = ({ route }) => {
    const Stack = createStackNavigator<SharedStackParamsList>();
    /* eslint-disable */
    let feedComponent: React.FC<any> = EmptyView;
    /* eslint-enable */
    let title: string;
    if (route.name === 'NEWS') {
        feedComponent = NewsListViewIndex;
        title = 'JAUNUMI';
    }
    if (route.name === 'EVENTS') {
        feedComponent = EventListView;
        title = 'PASĀKUMI';
    } else if (route.name === 'VIDEO') {
        feedComponent = VideoView;
        title = 'VIDEO';
    } else if (route.name === 'MAP') {
        feedComponent = EventMapView;
        title = 'KARTE';
    }

    if (!route.name) {
        return null;
    }
    return (
        <Stack.Navigator initialRouteName={'Feed'}>
            <Stack.Screen
                name="Feed"
                options={({ navigation }) => ({
                    header: () => <Header title={title} navigate={navigation.navigate} />,
                })}
                component={feedComponent}
            />
            <Stack.Screen
                name="Favorites"
                options={({ navigation }) => ({
                    header: () => <SimpleHeader title={'MANI FAVORĪTI'} goBack={navigation.goBack} />,
                })}
                component={FavoriteListView}
            />
            <Stack.Screen
                name="Article"
                options={({ navigation }) => ({
                    header: () => <SimpleHeader title={''} goBack={navigation.goBack} />,
                })}
                component={MarkdownEvent}
            />
            <Stack.Screen
                name="Search"
                options={({ navigation, route }) => ({
                    header: () => <SearchHeader navigation={navigation} route={route} />,
                })}
                component={SearchView}
            />
        </Stack.Navigator>
    );
};

export default SharedStack;
