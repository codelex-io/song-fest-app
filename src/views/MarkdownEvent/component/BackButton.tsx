import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import { typography, colors, opacity } from '@styles';

interface Props {
    onPress: () => void;
}

const BackButton: React.FC<Props> = ({ onPress }) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress} activeOpacity={opacity.opacity8}>
            <Text style={styles.filterText}>Atpakaļ uz augšu</Text>
        </TouchableOpacity>
    );
};
export default BackButton;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '50%',
        flexDirection: 'row',
        justifyContent: 'center',
        paddingVertical: 13,
        backgroundColor: colors.yellow,
        marginBottom: 64,
    },
    filterText: {
        fontSize: 14,
        fontFamily: typography.bold,
        justifyContent: 'center',
    },
});
