import React, { useCallback } from 'react';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import { RouteProp, useFocusEffect } from '@react-navigation/native';
import { MoreView } from '@views';
import { colors } from '@styles';
import { setStatusBarBackgroundColor } from '@utils';

export type MoreViewStackParamsList = {
    Feed: undefined;
};

export type MoreViewStackNavProps<T extends keyof MoreViewStackParamsList> = {
    navigation: StackNavigationProp<MoreViewStackParamsList, T>;
    route: RouteProp<MoreViewStackParamsList, T>;
};

const Stack = createStackNavigator();

const MoreStack: React.FC = () => {
    useFocusEffect(useCallback(() => setStatusBarBackgroundColor(colors.white), []));

    return (
        <Stack.Navigator initialRouteName="Feed" headerMode="none">
            <Stack.Screen name="Feed" component={MoreView} />
        </Stack.Navigator>
    );
};

export default MoreStack;
