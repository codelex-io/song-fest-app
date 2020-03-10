import React, { useContext } from 'react';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import { SimpleHeader, Header } from '@components';
import {
    FavoriteListView,
    MarkdownEvent,
    SearchView,
    EventListView,
    VideoView,
    EmptyView,
    EventMapView,
    UserSettings,
} from '@views';
import SearchHeader from '@components/headers/SearchHeader';
import { FavouriteGroupKey } from '@domain/favourites/types';
import { RouteProp } from '@react-navigation/native';
import { AppTabsNavParams } from '..';
import { NewsListViewIndex } from '@views/NewsListView';
import { LocalizationContext } from '../../localization/LocalizationContext';
import NoHeader from '@components/headers/NoHeader';

export type SharedStackParamsList = {
    Feed: { payload: string };
    Favorites: undefined;
    Article: { itemId: string; group: FavouriteGroupKey };
    Search: undefined;
    UserCategory: undefined;
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
    const { translations } = useContext(LocalizationContext);
    if (route.name === 'NEWS') {
        feedComponent = NewsListViewIndex;
        title = 'NEWS';
    }
    if (route.name === 'EVENTS') {
        feedComponent = EventListView;
        title = 'EVENTS';
    } else if (route.name === 'VIDEO') {
        feedComponent = VideoView;
        title = 'VIDEO';
    } else if (route.name === 'MAP') {
        feedComponent = EventMapView;
        title = 'MAP';
    }

    if (!route.name) {
        return null;
    }
    return (
        <Stack.Navigator initialRouteName={'Feed'}>
            <Stack.Screen
                name="Feed"
                options={({ navigation }) => ({
                    header: () =>
                        route.name !== 'MAP' ? (
                            <Header title={translations.getString(title)} navigate={navigation.navigate} />
                        ) : (
                            <NoHeader />
                        ),
                })}
                component={feedComponent}
            />
            <Stack.Screen
                name="Favorites"
                options={({ navigation }) => ({
                    header: () => (
                        <SimpleHeader title={translations.getString('FAVORITE')} goBack={navigation.goBack} />
                    ),
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
            <Stack.Screen
                name="UserCategory"
                options={({ navigation }) => ({
                    header: () => (
                        <SimpleHeader title={translations.getString('USER_SETTINGS')} goBack={navigation.goBack} />
                    ),
                })}
                component={UserSettings}
            />
        </Stack.Navigator>
    );
};

export default SharedStack;
