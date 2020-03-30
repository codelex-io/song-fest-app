import React, { useContext } from 'react';
import { View, Text, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import { colors, typography } from '@styles';
import { LocalizationContext } from '@localization/LocalizationContext';
import SearchHeader from '@components/headers/SearchHeader';
import { statusBarHeight } from '@utils';
import { NewsStackNavProps } from '@navigation/stacks/NewsStack';

const SearchView: React.FC<NewsStackNavProps<'Search'>> = ({ route, navigation }) => {
    const { color: bgColor } = route.params;

    const popToTop = () => {
        navigation.popToTop();
    };
    navigation.addListener('blur', event => {
        popToTop();
    });

    const onSubmit = (input: string) => {
        navigation.removeListener('blur', () => {
            popToTop();
        });
        navigation.navigate('Feed', {
            searchPayload: {
                payload: input,
                isActive: true,
            },
        });
    };

    const goBack = () => {
        navigation.removeListener('blur', () => {
            popToTop();
        });
        navigation.goBack();
    };

    const { translations } = useContext(LocalizationContext);

    return (
        <KeyboardAvoidingView behavior={Platform.OS == 'ios' ? 'padding' : 'height'} style={styles.container}>
            <View>
                <SearchHeader {...{ onSubmit, bgColor, goBack }} />
            </View>
            <View style={styles.contentContainer}>
                <Text style={styles.text}>{translations.getString('SEARCH')}</Text>
            </View>
        </KeyboardAvoidingView>
    );
};

export default SearchView;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
        paddingTop: statusBarHeight(),
    },
    contentContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontFamily: typography.medium,
        fontSize: 16,
        lineHeight: 21,
        color: colors.darkGrey1A,
    },
});
