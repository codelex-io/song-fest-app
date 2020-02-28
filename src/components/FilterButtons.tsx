import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { colors } from '../styles';
import { typography } from '../styles';

interface FilterButtonsProps {
    firstTitle: string;
    secondTitle: string;
    currentActive: (value: boolean) => void;
}

export const FilterButtons: React.FC<FilterButtonsProps> = ({ firstTitle, secondTitle, currentActive }) => {
    const [isFirstActive, setIsFirstActive] = useState(true);

    const handleToggle = (clickOn: string) => {
        if (clickOn === 'first' && isFirstActive) {
            return;
        } else if (clickOn === 'first' && !isFirstActive) {
            setIsFirstActive(true);
            currentActive(true);
            return;
        } else if (clickOn === 'second' && !isFirstActive) {
            return;
        } else if (clickOn === 'second' && isFirstActive) {
            setIsFirstActive(false);
            currentActive(false);
        }
    };
    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={() => handleToggle('first')}
                style={[styles.containerLeft, isFirstActive ? styles.containerActive : styles.containeInactive]}
            >
                <Text style={[styles.text, isFirstActive ? styles.textActive : false]}>{firstTitle}</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => handleToggle('second')}
                style={[styles.containerRight, !isFirstActive ? styles.containerActive : styles.containeInactive]}
            >
                <Text style={[styles.text, !isFirstActive ? styles.textActive : false]}>{secondTitle}</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 44,
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 8,
        marginBottom: 16,
        marginHorizontal: 16,
    },
    containerActive: {
        backgroundColor: colors.blue,
    },
    containeInactive: {
        backgroundColor: colors.white,
        borderWidth: 1,
        borderColor: colors.blue,
    },
    containerLeft: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerRight: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontFamily: typography.bold,
        fontSize: 14,
        color: colors.blue,
        textAlign: 'center',
        letterSpacing: 1.15,
    },
    textActive: {
        color: colors.white,
    },
});
