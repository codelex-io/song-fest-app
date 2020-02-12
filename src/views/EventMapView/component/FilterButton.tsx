import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Icon, IconType } from '@components';

export const FilterButton: React.FC = () => (
    <View style={styles.button}>
        <Icon size={22} type={IconType.Filter} fill={'black'} />
        <Text style={styles.text}>{'Filtrs'.toUpperCase()}</Text>
    </View>
);

const styles = StyleSheet.create({
    button: {
        width: 106,
        height: 44,
        backgroundColor: '#FFCB05',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        textTransform: 'uppercase',
    },
    text: {
        fontSize: 14,
        marginLeft: 3,
    },
});
