import React from 'react';
import { useSettings } from '@domain/settings';
import { NavigationContainer } from '@react-navigation/native';
import { UserCategoryView } from '@views';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TabBarIcon } from '@components';
import { NewsStack, EventsStack, MapStack, VideoStack, MoreStack } from './stacks';

type AppTabsParamList = {
    NEWS: undefined,
    EVENTS: undefined,
    MAP: undefined,
    VIDEO: undefined,
    MORE: undefined
}

const Tab = createBottomTabNavigator<AppTabsParamList>()

const Navigation: React.FC = () => {
    const { userType, setUserType } = useSettings();

    if (userType === null) {
        return <UserCategoryView onSelect={setUserType} />;
    }

    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused }) => {
                        const { name } = route;
                        return <TabBarIcon route={name} focused={focused} />;
                    },
                    tabBarLabel: () => false,
                })}
            >
                <Tab.Screen name="NEWS" component={NewsStack} />
                <Tab.Screen name="EVENTS" component={EventsStack} />
                <Tab.Screen name="MAP" component={MapStack} />
                <Tab.Screen name="VIDEO" component={VideoStack} />
                <Tab.Screen name="MORE" component={MoreStack} />
            </Tab.Navigator>
        </NavigationContainer>
    );
};

export default Navigation;
