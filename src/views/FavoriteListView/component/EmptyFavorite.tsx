import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Icon, IconType } from '@components';
import { colors } from '@styles';

export const EmptyFavorite: React.FC = () => {
    return (
        <View style={styles.container}>
            <Icon style={styles.icon} size={44} type={IconType.HeartFilled} fill={colors.orange} />
            <Text style={styles.title}>Šeit varēsi atrast savus favorītus</Text>
            <Text style={styles.title2}>
                Favorītiem var pievienot pasākumus, jaunumus un video, ko vēlies ātri atrast
            </Text>
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
