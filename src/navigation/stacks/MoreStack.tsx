import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { MoreView, LanguageView, } from '@views';
import { Header } from '@components';

const Stack = createStackNavigator();

const MoreStack: React.FC = () => {
   return (
      <Stack.Navigator initialRouteName="More">
         <Stack.Screen
            name="More"
            options={{
               header: () => <Header title={'KARTE'} />,
            }}
            component={MoreView} />
         <Stack.Screen
            name="Language"
            options={{ title: 'VALODA' }}
            component={LanguageView} />
      </Stack.Navigator>
   )
}

export default MoreStack