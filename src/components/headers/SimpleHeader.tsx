import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { typography, colors } from '@styles';
import Icon, { IconType } from '../Icon';
import { SafeAreaConsumer } from 'react-native-safe-area-context';

interface HeaderProps {
    title: string;
    goBack: () => void;
}

export const SimpleHeader: React.FC<HeaderProps> = ({ title, goBack }) => (
    <SafeAreaConsumer>
        {insets => (
            <View style={{ paddingTop: insets?.top }}>
                <View style={styles.header}>
                    <TouchableOpacity style={styles.iconBox} onPress={goBack}>
                        <Icon type={IconType.ChevronLeft} fill={colors.darkGrey1A} />
                    </TouchableOpacity>
                    <Text style={styles.text}>{title}</Text>
                </View>
            </View>
        )}
    </SafeAreaConsumer>
);

const styles = StyleSheet.create({
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
