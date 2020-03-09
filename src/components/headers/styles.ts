import { StyleSheet } from 'react-native';
import { colors, typography } from '@styles';

export const styles = StyleSheet.create({
    insetsContainer: {
        backgroundColor: colors.white,
    },
    header: {
        marginVertical: 8,
        marginHorizontal: 16,
        textAlign: 'left',
        letterSpacing: 0.15,
        fontSize: 20,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: colors.white,
    },
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
    simpleText: {
        fontSize: 20,
        fontFamily: typography.bold,
        lineHeight: 26,
        color: colors.darkGrey1A,
        letterSpacing: 0.15,
    },
    textContainer: {
        padding: 15,
    },
});
