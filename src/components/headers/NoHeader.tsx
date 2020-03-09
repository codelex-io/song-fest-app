import React from 'react';
import { SafeAreaConsumer } from 'react-native-safe-area-context';
import { View, Platform, StyleSheet } from 'react-native';

const NoHeader = () => {
    return (
        <SafeAreaConsumer>
            {insets => (
                <View style={[{ paddingTop: Platform.OS === 'ios' ? insets?.top : 0 }, styles.insetsContainer]}></View>
            )}
        </SafeAreaConsumer>
    );
};

export default NoHeader;

const styles = StyleSheet.create({
    insetsContainer: {
        backgroundColor: 'pink',
    },
});
