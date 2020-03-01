import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { typography, colors } from '@styles';
import { IconType } from '../Icon';
import { SafeAreaConsumer } from 'react-native-safe-area-context';
import { IconBtn44 } from '@components/buttons';

interface HeaderProps {
    title: string;
    goBack: () => void;
}

export const SimpleHeader: React.FC<HeaderProps> = ({ title, goBack }) => (
    <SafeAreaConsumer>
        {insets => (
            <View style={[styles.header, { marginTop: insets?.top }]}>
                <IconBtn44
                    style={styles.iconBox}
                    icon={IconType.ChevronLeft}
                    color={colors.darkGrey1A}
                    bgColor={colors.white}
                    onPress={goBack}
                />
                <Text style={styles.text}>{title}</Text>
            </View>
        )}
    </SafeAreaConsumer>
);

const styles = StyleSheet.create({
    header: {
        padding: 6,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: colors.white,
    },
    iconBox: {
        marginRight: 6,
    },
    text: {
        fontSize: 20,
        fontFamily: typography.normal,
        lineHeight: 26,
        fontWeight: '500',
        color: colors.darkGrey1A,
    },
});
