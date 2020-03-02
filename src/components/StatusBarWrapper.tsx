import React from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { colors } from '@styles';

export const StatusBarWrapper: React.FC = ({ children }) => (
    <View style={styles.container}>
        <View style={[styles.statusBar]}>
            <StatusBar translucent backgroundColor={colors.white} barStyle="dark-content" />
        </View>
        <View style={styles.content}>{children}</View>
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    statusBar: {
        height: getStatusBarHeight(),
        backgroundColor: colors.white,
    },
    content: {
        flex: 1,
        backgroundColor: colors.white,
    },
});
