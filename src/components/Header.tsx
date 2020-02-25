import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { typography, colors } from '@styles';
import Icon, { IconType } from './Icon';
import { SafeAreaConsumer } from 'react-native-safe-area-context';

interface HeaderProps {
    title: string;
    onPress: () => void;
}

export const Header: React.FC<HeaderProps> = ({ title, onPress }) => {
    return (
        <SafeAreaConsumer>
            {insets => (
                <View style={{ paddingTop: insets?.top }}>
                    <View style={styles.container}>
                        <Text style={styles.text}>{title}</Text>
                        <TouchableOpacity style={styles.containerBox} onPress={onPress}>
                            <Icon size={40} type={IconType.HeartFilled} fill={colors.white} />
                        </TouchableOpacity>
                    </View>
                </View>
            )}
        </SafeAreaConsumer>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingVertical: 8,
        paddingHorizontal: 16,
        letterSpacing: 0.15,
        fontSize: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: colors.white,
    },
    containerBox: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontFamily: typography.bold,
        fontSize: 20,
        textTransform: 'uppercase',
    },
});
