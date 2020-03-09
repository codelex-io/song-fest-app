import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { colors, opacity } from '../styles';
import { typography } from '../styles';

interface FilterButtonsProps {
    firstTitle: string;
    secondTitle: string;
    triggerToggle: (value: boolean) => void;
    currentActive: boolean;
}

export const FilterButtons: React.FC<FilterButtonsProps> = ({
    firstTitle,
    secondTitle,
    currentActive,
    triggerToggle,
}) => {
    const [isFirstActive, setIsFirstActive] = useState(currentActive);

    const handleToggle = (clickOn: string) => {
        if (clickOn === 'first' && isFirstActive) {
            return;
        } else if (clickOn === 'first' && !isFirstActive) {
            setIsFirstActive(true);
            triggerToggle(true);
            return;
        } else if (clickOn === 'second' && !isFirstActive) {
            return;
        } else if (clickOn === 'second' && isFirstActive) {
            setIsFirstActive(false);
            triggerToggle(false);
        }
    };
    return (
        <View style={styles.container}>
            <TouchableOpacity
                activeOpacity={opacity.opacity8}
                onPress={() => handleToggle('first')}
                style={[styles.button, isFirstActive ? styles.containerActive : styles.containerInactive]}
            >
                <Text style={[styles.text, isFirstActive ? styles.textActive : false]}>{firstTitle}</Text>
            </TouchableOpacity>
            <TouchableOpacity
                activeOpacity={opacity.opacity8}
                onPress={() => handleToggle('second')}
                style={[styles.button, !isFirstActive ? styles.containerActive : styles.containerInactive]}
            >
                <Text style={[styles.text, !isFirstActive ? styles.textActive : false]}>{secondTitle}</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 8,
        marginBottom: 16,
        marginHorizontal: 16,
    },
    containerActive: {
        backgroundColor: colors.blue,
    },
    containerInactive: {
        backgroundColor: colors.white,
        borderWidth: 1,
        borderColor: colors.blue,
    },
    button: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 13,
    },
    text: {
        fontFamily: typography.bold,
        fontSize: 14,
        color: colors.blue,
        textAlign: 'center',
        letterSpacing: 1.15,
        textTransform: 'uppercase',
    },
    textActive: {
        color: colors.white,
    },
});
