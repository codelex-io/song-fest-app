import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Icon, IconType } from '@components';
import { colors, typography } from '@styles';

interface CardProps {
    title: string;
    active: boolean;
}

export const Card: React.FC<CardProps> = ({ title, active }) => (
    <View style={styles.container}>
        <View style={styles.icon}>
            {active ? (
                <Icon size={24} type={IconType.RadioBoxMarked} fill={colors.darkGrey1A} />
            ) : (
                    <Icon size={24} type={IconType.RadioBoxBlank} fill={colors.darkGrey1A} />
                )}
        </View>
        <Text style={styles.text}>{title}</Text>
    </View>
);

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingHorizontal: 16,
        justifyContent: 'flex-start',
    },
    icon: {
        flex: 1,
        alignItems: 'flex-start',
    },
    text: {
        flex: 7,
        color: colors.darkGrey1A,
        fontFamily: typography.bold,
        fontSize: 14,
        textTransform: 'uppercase',
    },
});