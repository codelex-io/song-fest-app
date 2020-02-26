import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Header } from '@components';
import { EventMapView } from '@views';

const Stack = createStackNavigator();

const MapStack: React.FC = () => {
   return (
      <Stack.Navigator initialRouteName="Map">
         <Stack.Screen
            name="Map"
            options={{
               header: () => <Header title={'KARTE'} />,
            }}
            component={EventMapView} />
      </Stack.Navigator>
   )
}

export default MapStack