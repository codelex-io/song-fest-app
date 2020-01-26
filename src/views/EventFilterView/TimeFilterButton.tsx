import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { colors, typography } from '../../styles';

interface FilterButtonProps {
    button: {
        title: string;
        active: boolean;
    };
}

export class TimeFilterButton extends React.Component<FilterButtonProps> {
    render() {
        const { button } = this.props;
        return (
            <View style={styles.container}>
                <View style={[button.active ? styles.containerActive : styles.containeInactive]}>
                    <View>
                        <Text style={[button.active ? styles.textActive : styles.textInactive]}>{button.title}</Text>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        paddingHorizontal: 8,
    },
    containerActive: {
        height: 40,
        backgroundColor: colors.purple,
        justifyContent: 'center',
        paddingHorizontal: 12,
    },
    containeInactive: {
        height: 40,
        backgroundColor: 'rgba(150,64,130,0.1)',
        justifyContent: 'center',
        paddingHorizontal: 12,
    },
    textInactive: {
        fontFamily: typography.bold,
        fontSize: 14,
        textAlign: 'center',
        color: colors.purple,
        textTransform: 'uppercase',
    },
    textActive: {
        fontFamily: typography.bold,
        color: colors.white,
        textAlign: 'center',
        textTransform: 'uppercase',
    },
});
