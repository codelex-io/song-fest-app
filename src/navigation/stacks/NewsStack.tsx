import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { NewsListViewIndex } from '@views/NewsListView';
import { MarkdownEvent } from '@views';
import { Header, SimpleHeader } from '@components';

const Stack = createStackNavigator();

const NewsStack: React.FC = () => {
   return (
      <Stack.Navigator initialRouteName="News">
         <Stack.Screen
            name="News"
            options={{
               header: () => <Header title={'JAUNUMI'} />,
            }}
            component={NewsListViewIndex} />
         <Stack.Screen
            name="SingleNews"
            options={{
               header: () => <SimpleHeader title={''} />,
            }}
            component={MarkdownEvent} />
      </Stack.Navigator>
   )
}

export default NewsStack