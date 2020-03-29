import React from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';
import { colors } from '@styles';

export const StatusBarWrapper: React.FC = ({ children }) => (
    <View style={styles.container}>
        <StatusBar backgroundColor={colors.white} barStyle="dark-content" />
        <View style={styles.content}>{children}</View>
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        flex: 1,
        backgroundColor: colors.white,
    },
});
