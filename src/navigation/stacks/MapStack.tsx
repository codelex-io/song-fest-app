import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { Header } from '@components';
import { EventMapView } from '@views';

const Stack = createStackNavigator();

const MapStack: React.FC = () => {
    const navigation = useNavigation();
    return (
        <Stack.Navigator initialRouteName="Map">
            <Stack.Screen
                name="Map"
                options={{
                    header: () => <Header title={'KARTE'} navigate={navigation.navigate} />,
                }}
                component={EventMapView}
            />
        </Stack.Navigator>
    );
};

export default MapStack;
