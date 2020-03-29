import { StyleSheet } from 'react-native';
import { colors, typography } from '@styles';

export const styles = StyleSheet.create({
    simpleHeader: {
        paddingHorizontal: 16,
        textAlign: 'left',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: colors.white,
    },
    iconBox: {
        paddingLeft: 8,
        paddingVertical: 13,
    },
    text: {
        fontSize: 14,
        fontFamily: typography.bold,
        lineHeight: 18,
        fontWeight: '500',
        color: colors.white,
        letterSpacing: 0.125,
    },
    textContainer: {
        padding: 15,
    },
});
