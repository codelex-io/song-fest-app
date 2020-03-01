import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { VideoView } from '@views';
import { Header } from '@components';

const Stack = createStackNavigator();

const VideoStack: React.FC = () => {
    const navigation = useNavigation();
    return (
        <Stack.Navigator initialRouteName="Video">
            <Stack.Screen
                name="Video"
                options={{
                    header: () => <Header title={'VIDEO'} navigate={navigation.navigate} />,
                }}
                component={VideoView}
            />
        </Stack.Navigator>
    );
};

export default VideoStack;
