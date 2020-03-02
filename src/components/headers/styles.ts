import { StyleSheet } from 'react-native';
import { colors, typography } from '@styles';

export const styles = StyleSheet.create({
    header: {
        paddingVertical: 8,
        paddingHorizontal: 6,
        textAlign: 'left',
        letterSpacing: 0.15,
        fontSize: 20,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: colors.white,
    },
    iconBox: {
        padding: 10,
    },
    text: {
        fontSize: 20,
        fontFamily: typography.normal,
        lineHeight: 26,
        fontWeight: '500',
        color: colors.darkGrey1A,
    },
    textContainer: {
        padding: 15,
    },
});
