import React from 'react';
import { View, StyleSheet } from 'react-native';

export const ListItemSeparator: React.FC = () => <View style={styles.item}></View>;

const styles = StyleSheet.create({
    item: {
        height: 1,
        backgroundColor: '#C4C4C4',
        width: '100%',
    },
});
