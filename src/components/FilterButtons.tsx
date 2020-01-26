import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { colors } from '../styles/colors';
import { fontFamily } from '../styles/typography';

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
    },
    containerActive: {
        backgroundColor: colors.green,
    },
    containeInactive: {
        backgroundColor: 'rgba(0, 162, 88,0.15)',
    },
    containerLeft: {
        flex: 1,
        borderTopLeftRadius: 8,
        borderBottomLeftRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerRight: {
        flex: 1,
        borderTopRightRadius: 8,
        borderBottomRightRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontFamily: fontFamily.bold,
        fontSize: 14,
        color: colors.green,
        textAlign: 'center',
        letterSpacing: 1.15,
    },
    textActive: {
        color: colors.white,
    },
});
