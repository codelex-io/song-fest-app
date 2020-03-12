import React from 'react';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import { RouteProp, NavigationContainer } from '@react-navigation/native';
import { UserCategoryView, LanguageView } from '@views';

export type InitialUserSettingsStackParamsList = {
    User: undefined;
    Language: { selectedUser: string };
};

export type InitialUserSettingsStackNavParams<T extends keyof InitialUserSettingsStackParamsList> = {
    navigation: StackNavigationProp<InitialUserSettingsStackParamsList, T>;
    route: RouteProp<InitialUserSettingsStackParamsList, T>;
};
const InitialUserSettingsStack: React.FC = ({}) => {
    const Stack = createStackNavigator<InitialUserSettingsStackParamsList>();
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={'Language'} headerMode="none">
                <Stack.Screen name="Language" component={LanguageView} />
                <Stack.Screen name="User" component={UserCategoryView} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default InitialUserSettingsStack;
