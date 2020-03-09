import React, { useContext } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { LocalizationContext } from '../localization/LocalizationContext';
import { opacity, colors } from '@styles';
import { Language } from '@localization/types';

export const LanguageView: React.FC = () => {
    const { translations, appLanguage, setAppLanguage } = useContext(LocalizationContext);

    return (
        <View style={{ flex: 1, paddingHorizontal: 20, backgroundColor: colors.white }}>
            {translations.getAvailableLanguages().map((item: string) => (
                <View key={item}>
                    <TouchableOpacity
                        style={{
                            paddingVertical: 20,
                            flexDirection: 'row',
                            alignItems: 'center',
                        }}
                        onPress={() => setAppLanguage(item as Language)}
                        activeOpacity={opacity.opacity8}
                    >
                        <Text style={{ fontSize: 16 }}>{item}</Text>
                        {appLanguage === item ? <Text style={{ marginLeft: 30 }}>√</Text> : null}
                    </TouchableOpacity>
                </View>
            ))}
        </View>
    );
};
