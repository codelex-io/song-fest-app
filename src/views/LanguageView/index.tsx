import React from 'react';
import { View, StyleSheet } from 'react-native';
import { colors } from '@styles';
import { Card } from './Card';
import { Language } from '@localization/types';

interface Props {
    onSelect: (language: Language) => void;
}

export const LanguageView: React.FC<Props> = ({ onSelect }) => {
    return (
        <View style={styles.container}>
            <Card
                image={require('./lv.png')}
                title={'Latviski'}
                onPress={() => onSelect('lv')}
                backgroundColor={colors.green}
            />
            <Card
                image={require('./gb.png')}
                title={'English'}
                onPress={() => onSelect('en')}
                backgroundColor={colors.blue}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 16,
        backgroundColor: colors.white,
    },
});
