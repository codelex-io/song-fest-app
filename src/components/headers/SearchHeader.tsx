import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { IconType } from '@components';
import { colors, typography } from '@styles';
import IconBtn24 from '@components/buttons/IconBtn24';
import { useLanguageSettings } from '@localization/LocalizationContext';

export interface SearchInterface {
    payload: string;
    isActive: boolean;
}

interface Props {
    bgColor: string;
    onSubmit: (input: string) => void;
    goBack: () => void;
}

const SearchHeader: React.FC<Props> = ({ onSubmit, bgColor, goBack }) => {
    const [input, setInput] = useState<string>('');

    const { translations } = useLanguageSettings();

    const handleSubmit = () => {
        setInput('');
        onSubmit(input);
    };

    const inputAccessoryViewID = 'searchHeaderInput';

    return (
        <View style={styles.container}>
            <View style={[styles.header, { backgroundColor: bgColor }]}>
                <IconBtn24
                    icon={IconType.ChevronLeft}
                    color={colors.white}
                    bgColor={bgColor}
                    onPress={goBack}
                    style={styles.btn}
                />

                <TextInput
                    autoFocus
                    keyboardType="ascii-capable"
                    maxLength={200}
                    style={styles.text}
                    inputAccessoryViewID={inputAccessoryViewID}
                    onChangeText={text => setInput(text)}
                    value={input}
                    onSubmitEditing={handleSubmit}
                    selectionColor={colors.white}
                    placeholder={translations.getString('SEARCH_SHORT').toUpperCase()}
                    placeholderTextColor={'rgba(255,255,255,.5)'}
                    underlineColorAndroid="rgba(255,255,255,.0)"
                    returnKeyType="search"
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingVertical: 8,
    },
    header: {
        marginHorizontal: 16,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: colors.white,
    },
    btn: {
        marginLeft: 12,
        marginRight: 7,
    },
    text: {
        height: 44,
        flexDirection: 'row',
        flex: 1,
        fontFamily: typography.bold,
        fontSize: 14,
        color: colors.white,
    },
});
export default SearchHeader;
