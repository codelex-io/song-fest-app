import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { EventListView, MarkdownEvent } from '@views';
import { Header, SimpleHeader } from '@components';

const Stack = createStackNavigator();

const NewsStack: React.FC = () => {
   return (
      <Stack.Navigator initialRouteName="Events">
         <Stack.Screen
            name="Events"
            options={{
               header: () => <Header title={'PASĀKUMI'} />,
            }}
            component={EventListView} />
         <Stack.Screen
            name="Single Event"
            options={{
               header: () => <SimpleHeader title={''} />
            }}
            component={MarkdownEvent} />
      </Stack.Navigator>
   )
}

export default NewsStack