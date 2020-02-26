import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { VideoView } from '@views';
import { Header } from '@components';

const Stack = createStackNavigator();

const VideoStack: React.FC = () => {
   return (
      <Stack.Navigator initialRouteName="Video">
         <Stack.Screen
            name="Video"
            options={{
               header: () => <Header title={'KARTE'} />,
            }}
            component={VideoView} />
      </Stack.Navigator>
   )
}

export default VideoStack