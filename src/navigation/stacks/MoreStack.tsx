import React, { useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { MoreView, LanguageView } from '@views';
import { Header } from '@components';
import { useStoryBook } from '@domain/storybook';

const Stack = createStackNavigator();

const MoreStack: React.FC = () => {
    const [devPressCount, setDevPressCount] = useState<number>(0);
    const navigation = useNavigation();
    const { setStoryBookActive } = useStoryBook();
    return (
        <Stack.Navigator initialRouteName="More">
            <Stack.Screen
                name="More"
                options={{
                    header: () => (
                        <Header
                            title={'KARTE'}
                            navigate={navigation.navigate}
                            onLongPressTitle={() => {
                                if (devPressCount < 2) {
                                    setDevPressCount(devPressCount + 1);
                                    return;
                                }
                                setStoryBookActive(true);
                            }}
                        />
                    ),
                }}
                component={MoreView}
            />
            <Stack.Screen name="Language" options={{ title: 'VALODA' }} component={LanguageView} />
        </Stack.Navigator>
    );
};

export default MoreStack;
