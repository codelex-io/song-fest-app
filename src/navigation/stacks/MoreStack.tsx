import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { MoreView, LanguageView } from '@views';
import { Header } from '@components';

const Stack = createStackNavigator();

const MoreStack: React.FC = () => {
    const navigation = useNavigation();
    return (
        <Stack.Navigator initialRouteName="More">
            <Stack.Screen
                name="More"
                options={{
                    header: () => <Header title={'KARTE'} navigate={navigation.navigate} />,
                }}
                component={() => <MoreView navigate={navigation.navigate} />}
            />
            <Stack.Screen name="Language" options={{ title: 'VALODA' }} component={LanguageView} />
        </Stack.Navigator>
    );
};

export default MoreStack;
