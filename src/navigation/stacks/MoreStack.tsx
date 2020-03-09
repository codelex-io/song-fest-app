import React, { useState, useContext } from 'react';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { MoreView, LanguageView, UserSettings, FavoriteListView } from '@views';
import { Header, SimpleHeader } from '@components';
import { useStoryBook } from '@domain/storybook';
import { LocalizationContext } from '../../localization/LocalizationContext';
import { AppTabsNavParams } from '..';

export type MoreViewStackParamsList = {
    Feed: undefined;
    Favorites: undefined;
    Language: undefined;
    UserCategory: undefined;
};

export type MoreViewStackNavProps<T extends keyof MoreViewStackParamsList> = {
    navigation: StackNavigationProp<MoreViewStackParamsList, T>;
    route: RouteProp<MoreViewStackParamsList, T>;
};

const Stack = createStackNavigator();

const MoreStack: React.FC<AppTabsNavParams<'MORE'>> = () => {
    const [devPressCount, setDevPressCount] = useState<number>(0);
    const { setStoryBookActive } = useStoryBook();
    const { translations } = useContext(LocalizationContext);

    return (
        <Stack.Navigator initialRouteName="Feed">
            <Stack.Screen
                name="Feed"
                options={({ navigation }) => ({
                    header: () => (
                        <Header
                            title={translations.getString('MORE')}
                            navigate={navigation.navigate}
                            onLongPressTitle={() => {
                                if (devPressCount < 2) {
                                    setDevPressCount(devPressCount + 1);
                                    return;
                                }
                                setStoryBookActive(true);
                            }}
                        />
                    ),
                })}
                component={MoreView}
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
                name="Language"
                options={({ navigation }) => ({
                    header: () => (
                        <SimpleHeader title={translations.getString('LANGUAGE')} goBack={navigation.goBack} />
                    ),
                })}
                component={LanguageView}
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

export default MoreStack;
