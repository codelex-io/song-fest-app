import React, { useContext } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Icon, IconType } from '@components';
import { colors } from '@styles';
import { LocalizationContext } from '../../../localization/LocalizationContext';

export const EmptyFavorite: React.FC = () => {
    const { translations } = useContext(LocalizationContext);
    return (
        <View style={styles.container}>
            <Icon style={styles.icon} size={44} type={IconType.HeartFilled} fill={colors.orange} />
            <Text style={styles.title}>{translations.getString('FAVORITES_HERE')}</Text>
            <Text style={styles.title2}>{translations.getString('FAVORITE_INFO')}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        paddingHorizontal: 16,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.white,
    },
    icon: {
        marginBottom: 24,
    },
    title: {
        fontSize: 20,
        textAlign: 'center',
        lineHeight: 26,
        marginBottom: 12,
    },
    title2: {
        fontSize: 16,
        textAlign: 'center',
        paddingHorizontal: 24,
        lineHeight: 21,
    },
});
