import { StyleSheet, Platform } from 'react-native';

export const topHeader = StyleSheet.create({
    container: {
        ...Platform.select({
            ios: {
                marginTop: 48,
            },
            android: {
                marginTop: 0,
            },
        }),
    },
});
