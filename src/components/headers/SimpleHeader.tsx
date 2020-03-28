import React from 'react';
import { Text, View, StyleSheet, ViewStyle } from 'react-native';
import { colors, typography } from '@styles';
import { IconType } from '../Icon';
import { IconBtn44 } from '@components/buttons';
import { TextTransform } from '@styles/typography';

interface HeaderProps {
    title: string;
    onBack: () => void;
    textTransform?: TextTransform;
    propStyles?: ViewStyle
}

export const SimpleHeader: React.FC<HeaderProps> = ({ title, onBack, textTransform = 'uppercase', propStyles }) => (
    <View style={[styles.header, propStyles]}>
        <IconBtn44
            style={styles.iconBox}
            icon={IconType.ChevronLeft}
            color={colors.darkGrey1A}
            bgColor={colors.white}
            onPress={onBack}
        />
        <Text style={[styles.simpleText, { textTransform }]}>{title}</Text>
    </View>
);

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    iconBox: {
        margin: 6,
    },
    simpleText: {
        fontFamily: typography.medium,
        fontSize: 20,
        lineHeight: 26,
        letterSpacing: 0.0015,
        color: colors.darkGrey1A,
    },
});
