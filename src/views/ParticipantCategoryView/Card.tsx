import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Icon, IconType } from '@components';
import { colors, typography } from '@styles';

interface CardProps {
    icon: IconType;
    title: string;
    backgroundColor: string;
}

export const Card: React.FC<CardProps> = ({ icon, title, backgroundColor }) => (
    <TouchableOpacity style={[styles.columnContainer, { backgroundColor }]}>
        <View style={styles.containerBox}>
            <Icon size={24} type={icon} fill={backgroundColor} />
        </View>
        <Text style={styles.text}>{title}</Text>
        <View style={styles.icon}>
            <Icon size={24} type={IconType.ChevronRight} fill={colors.white} />
        </View>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        paddingHorizontal: 16,
        justifyContent: 'center',
    },
    columnContainer: {
        height: 76,
        alignItems: 'center',
        flexDirection: 'row',
        padding: 16,
        marginTop: 16,
        backgroundColor: '#F15A31',
    },
    containerBox: {
        height: 44,
        width: 44,
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: colors.white,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 16,
    },
    icon: {
        flex: 1,
        alignItems: 'flex-end',
    },
    text: {
        flex: 1,
        color: colors.white,
        fontFamily: typography.bold,
        fontSize: 20,
        letterSpacing: 0.75,
    },
});
