import React, { useState, useContext } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { MoreView, LanguageView, UserSettings } from '@views';
import { Header, SimpleHeader } from '@components';
import { useStoryBook } from '@domain/storybook';
import { LocalizationContext } from '../../localization/LocalizationContext';

const Stack = createStackNavigator();

const MoreStack: React.FC = () => {
    const [devPressCount, setDevPressCount] = useState<number>(0);
    const navigation = useNavigation();
    const { setStoryBookActive } = useStoryBook();
    const { translations } = useContext(LocalizationContext);

    return (
        <Stack.Navigator initialRouteName="More">
            <Stack.Screen
                name="More"
                options={{
                    header: () => (
                        <Header
                            title={translations.getString('MORE')}
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
            <Stack.Screen
                name="Language"
                options={{
                    header: () => (
                        <SimpleHeader title={translations.getString('LANGUAGE')} goBack={navigation.goBack} />
                    ),
                }}
                component={LanguageView}
            />
            <Stack.Screen
                name="UserCategory"
                options={{
                    header: () => (
                        <SimpleHeader title={translations.getString('USER_SETTINGS')} goBack={navigation.goBack} />
                    ),
                }}
                component={UserSettings}
            />
        </Stack.Navigator>
    );
};

export default MoreStack;
