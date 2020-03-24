import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors, typography } from '@styles';
import { LocalizationContext } from '@localization/LocalizationContext';
import StatusBar from '@components/headers/StatusBar';
import SearchHeader from '@components/headers/SearchHeader';
import { SharedStackNavList } from 'src/navigation/stacks/SharedStack';

const SearchView: React.FC<SharedStackNavList<'Search'>> = ({ route, navigation }) => {
    const { translations } = useContext(LocalizationContext);

    return (
        <View style={styles.container}>
            <View>
                <StatusBar />
                <SearchHeader navigation={navigation} route={route} />
            </View>

            <View style={styles.contentContainer}>
                <Text style={styles.text}>{translations.getString('SEARCH')}</Text>
            </View>
        </View>
    );
};

export default SearchView;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
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
