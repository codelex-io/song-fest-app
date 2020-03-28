import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { typography, colors, opacity } from '@styles';
import Icon, { IconType } from '../Icon';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

interface HeaderProps {
    title: string;
    onLongPressTitle?: () => void;
    containerStyle?: { [key: string]: string | number };
    onButton1: () => void;
    onButton2: () => void;
}

export const Header: React.FC<HeaderProps> = ({ title, onLongPressTitle, containerStyle, onButton1, onButton2 }) => {
    return (
        <View style={{ ...containerStyle }}>
            <View style={styles.container}>
                <TouchableWithoutFeedback onLongPress={() => onLongPressTitle && onLongPressTitle()}>
                    <Text style={styles.text}>{title}</Text>
                </TouchableWithoutFeedback>
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity style={styles.containerBox1} onPress={onButton1} activeOpacity={opacity.opacity8}>
                        <Icon type={IconType.Face} fill={colors.white} />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.containerBox} onPress={onButton2} activeOpacity={opacity.opacity8}>
                        <Icon type={IconType.HeartFilled} fill={colors.white} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
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
    },
    containerBox: {
        height: 40,
        width: 40,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.orange,
        marginLeft: 16,
    },
    containerBox1: {
        height: 40,
        width: 40,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.green,
    },
    text: {
        fontFamily: typography.bold,
        fontSize: 20,
        textTransform: 'uppercase',
    },
});
