import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { colors, typography } from '@styles';

interface FilterButtonProps {
    title: string;
    active: boolean;
    onPress: () => void;
}

export class TimeFilterButton extends React.Component<FilterButtonProps> {
    render() {
        const { title, active, onPress } = this.props;
        return (
            <TouchableOpacity style={styles.container} onPress={onPress}>
                <View style={[active ? styles.containerActive : styles.containeInactive]}>
                    <View>
                        <Text style={[active ? styles.textActive : styles.textInactive]}>{title}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        paddingRight: 8,
        marginBottom: 16,
    },
    containerActive: {
        height: 40,
        backgroundColor: colors.green,
        justifyContent: 'center',
        paddingHorizontal: 12,
    },
    containeInactive: {
        height: 40,
        backgroundColor: colors.white,
        borderWidth: 1,
        borderColor: colors.green,
        justifyContent: 'center',
        paddingHorizontal: 12,
    },
    textInactive: {
        fontFamily: typography.bold,
        fontSize: 14,
        textAlign: 'center',
        color: colors.green,
        textTransform: 'uppercase',
    },
    textActive: {
        fontFamily: typography.bold,
        color: colors.white,
        textAlign: 'center',
        textTransform: 'uppercase',
    },
});
