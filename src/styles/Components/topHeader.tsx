import { StyleSheet, Platform, StatusBar } from 'react-native';


export const topHeader = StyleSheet.create({
    container: {
        ...Platform.select({
            ios: {
                marginTop: StatusBar.currentHeight,
            },
            android: {
                marginTop: StatusBar.currentHeight,
            },
        }),
    },
});
