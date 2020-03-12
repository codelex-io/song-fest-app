import React from 'react';
import { SafeAreaConsumer } from 'react-native-safe-area-context';
import { View, Platform, StyleSheet } from 'react-native';

const StatusBar = () => {
    return (
        <SafeAreaConsumer>
            {insets => (
                <View style={[{ paddingTop: Platform.OS === 'ios' ? insets?.top : 0 }, styles.insetsContainer]}></View>
            )}
        </SafeAreaConsumer>
    );
};

export default StatusBar;

const styles = StyleSheet.create({
    insetsContainer: {
        backgroundColor: 'magenta',
    },
});
