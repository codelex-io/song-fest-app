import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { IconType } from '@components';
import { colors, typography } from '@styles';
import { SharedStackNavList } from 'src/navigation/stacks/SharedStack';
import IconBtn24 from '@components/buttons/IconBtn24';
import { useLanguageSettings } from '@localization/LocalizationContext';

export interface SearchInterface {
    payload: string;
    isActive: boolean;
}

const SearchHeader: React.FC<SharedStackNavList<'Search'>> = ({ route, navigation }) => {
    const [input, setInput] = useState('');

    const bgColor = route.params ? route.params.color : colors.blue;
    const rootName = route.params.route;
    const { translations } = useLanguageSettings();
    const handleSubmit = () => {
        setInput('');
        navigation.navigate('Feed', {
            searchPayload: {
                payload: input,
                isActive: true,
            },
            rootName,
        });
    };

    const inputAccessoryViewID = 'searchHeaderInput';
    return (
        <View style={styles.container}>
            <View style={[styles.header, { backgroundColor: bgColor }]}>
                <IconBtn24
                    icon={IconType.ChevronLeft}
                    color={colors.white}
                    bgColor={colors.blue}
                    onPress={() => navigation.goBack()}
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
        flexDirection: 'row',
        flex: 1,
        fontFamily: typography.bold,
        fontSize: 14,
        color: colors.white,
        textTransform: 'uppercase',
    },
});
export default SearchHeader;
