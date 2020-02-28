import React, { useState } from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import { typography } from '@styles';

interface Props {
    title: string;
    active?: boolean;
    onPress: () => void;
    primaryColor: string;
    secondaryColor: string;
    style?: { [key: string]: string | number };
}

const TextToggleBtn: React.FC<Props> = ({ title, active = false, onPress, primaryColor, secondaryColor, style }) => {
    const [isActive, setIsActive] = useState<boolean>(active);
    const handleToggle = () => {
        onPress();
        setIsActive(!isActive);
    };
    return (
        <TouchableOpacity
            style={[
                styles.container,
                { ...style },
                {
                    backgroundColor: isActive ? secondaryColor : primaryColor,
                    borderColor: primaryColor,
                },
            ]}
            onPress={handleToggle}
        >
            <Text style={[styles.text, { color: isActive ? primaryColor : secondaryColor }]}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingVertical: 11,
        paddingHorizontal: 12,
        borderWidth: 1,
    },
    text: {
        fontFamily: typography.bold,
        fontSize: 14,
        textAlign: 'center',
        textTransform: 'uppercase',
    },
});

export default TextToggleBtn;
