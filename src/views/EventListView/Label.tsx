import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Icon } from '../../components';

interface LabelProps {
    title: string;
}

export const Label: React.FC<LabelProps> = ({ title }) => (
    <View style={styles.container}>
        <Icon size={24} />
        <Text style={styles.title}>{title}</Text>
    </View>
);

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingRight: 25,
        alignItems: 'center',
    },
    title: {
        paddingLeft: 10,
        fontWeight: '500',
        fontSize: 14,
        lineHeight: 18,
        color: 'black',
    },
});
