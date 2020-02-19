import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { colors } from '../styles';
import { typography } from '../styles';

interface FilterButtonsProps {
    buttons: {
        title: string;
        active: boolean;
    }[];
}

export class FilterButtons extends React.Component<FilterButtonsProps> {
    render() {
        const { buttons } = this.props;
        return (
            <View style={styles.container}>
                <View
                    style={[styles.containerLeft, buttons[0].active ? styles.containerActive : styles.containeInactive]}
                >
                    <Text style={[styles.text, buttons[0].active ? styles.textActive : false]}>{buttons[0].title}</Text>
                </View>
                <View
                    style={[
                        styles.containerRight,
                        buttons[1].active ? styles.containerActive : styles.containeInactive,
                    ]}
                >
                    <Text style={[styles.text, buttons[1].active ? styles.textActive : false]}>{buttons[1].title}</Text>
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
