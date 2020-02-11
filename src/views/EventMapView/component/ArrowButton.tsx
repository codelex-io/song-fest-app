import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Icon, IconType } from '@components';

export const ArrowButton: React.FC = () => (
    <View style={styles.button}>
        <Icon size={22} type={IconType.MenuDown} fill={'black'} />
    </View>
);

const styles = StyleSheet.create({
    button: {
        width: 44,
        height: 44,
        backgroundColor: '#FFCB05',
        justifyContent: 'center',
        alignItems: 'center',
    },
});
