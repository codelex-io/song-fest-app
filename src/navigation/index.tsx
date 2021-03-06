import React from 'react';
import { useSettings } from '@domain/settings';
import { NavigationContainer, DefaultTheme, NavigationContainerRef, RouteProp } from '@react-navigation/native';
import { Theme } from '@react-navigation/native/lib/typescript/src/types';
import { colors } from '@styles';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import { Location, fromNotificationData } from './location';
import { UserCategoryView, FavoriteListView, UserSettings, Article } from '@views';
import BottomTabs, { BottomTabRoutes } from './BottomTabs';
import { FavouriteGroupKey } from '@domain/favourites/types';
import { AnyType } from '@domain/AnyType';

let initialLocation: Location | null = null;

const setInitialLocation = (location: Location) => (initialLocation = location);

const navigationRef = React.createRef<NavigationContainerRef>();

const navigate = (location: Location) => {
    navigationRef.current?.navigate('Article', {
        itemId: location.itemId,
        group: location.tab,
        hasHistory: true,
    });
};

const NavigationTheme: Theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        background: colors.white,
    },
};

export type RootNavigationRoutes = 'Tabs' | 'Favorites' | 'UserSettings' | 'Article';

type RootNavigation = {
    Tabs: {
        screen: BottomTabRoutes;
        params: AnyType;
    };
    Favorites: undefined;
    UserSettings: undefined;
    Article: {
        group: FavouriteGroupKey;
        itemId: string;
        hasHistory: boolean;
    };
};

export type RootNavProps<T extends keyof RootNavigation> = {
    navigation: StackNavigationProp<RootNavigation, T>;
    route: RouteProp<RootNavigation, T>;
};

const Navigation: React.FC = () => {
    const Stack = createStackNavigator<RootNavigation>();

    const { userType } = useSettings();
    if (userType === null) {
        return <UserCategoryView />;
    }

    const initialRouteName = initialLocation ? 'Article' : 'Tabs';

    const notificationItem = {
        group: initialLocation?.tab,
        itemId: initialLocation?.itemId,
        hasHistory: false,
    };

    return (
        <NavigationContainer theme={NavigationTheme} ref={navigationRef}>
            <Stack.Navigator initialRouteName={initialRouteName} headerMode="none">
                <Stack.Screen name="Tabs" component={BottomTabs} />
                <Stack.Screen name="Favorites" component={FavoriteListView} />
                <Stack.Screen name="UserSettings" component={UserSettings} />
                <Stack.Screen initialParams={notificationItem} name="Article" component={Article} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export { fromNotificationData, setInitialLocation, navigate };

export default Navigation;
