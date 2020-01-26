import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { colors, typography } from '../../styles';

interface FilterButtonProps {
    button: {
        title: string;
        active: boolean;
    };
}

export class FilterButton extends React.Component<FilterButtonProps> {
    render() {
        const { button } = this.props;
        return (
            <View style={styles.container}>
                <View style={[button.active ? styles.containerActive : styles.containeInactive]}>
                    <Text style={[styles.text, button.active ? styles.textActive : false]}>{button.title}</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: 44,
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 12,
        marginRight: 12,
    },
    containerActive: {
        backgroundColor: colors.orange,
    },
    containeInactive: {
        backgroundColor: colors.extrLighgrey6E,
    },
    text: {
        fontFamily: typography.bold,
        fontSize: 14,
        color: colors.darkGrey1A,
        textAlign: 'center',
        letterSpacing: 1.15,
        paddingVertical: 13,
        paddingHorizontal: 16,
    },
    textActive: {
        fontFamily: typography.bold,
        color: colors.white,
        fontSize: 14,
        paddingVertical: 13,
        paddingHorizontal: 16,
        textAlign: 'center',
    },
});
