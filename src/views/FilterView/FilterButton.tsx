import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

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
                <View
                    style={[button.active ? styles.containerActive : styles.containeInactive]}>
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
        backgroundColor: '#F15A31',
    },
    containeInactive: {
        backgroundColor: '#E6E6E6',
    },
    text: {
        fontFamily: 'DINPro-Bold',
        fontSize: 14,
        color: '#1A1A1A',
        textAlign: 'center',
        letterSpacing: 1.15,
        paddingVertical: 13,
        paddingHorizontal: 16,
    },
    textActive: {
        fontFamily: 'DINPro-Bold',
        color: '#FFFFFF',
        fontSize: 14,
        paddingVertical: 13,
        paddingHorizontal: 16,
        textAlign: 'center',
    },
});
