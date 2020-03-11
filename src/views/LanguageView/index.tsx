import React from 'react';
import { View, StyleSheet } from 'react-native';
import { colors } from '@styles';
import { Card } from './Card';
import { Language } from '@localization/types';
import LV from './LV.svg';
import GB from './GB.svg';

interface Props {
    onSelect: (language: Language) => void;
}

export const LanguageView: React.FC<Props> = ({ onSelect }) => {
    return (
        <View style={styles.container}>
            <Card
                image={<LV style={{ width: 28, height: 20 }} />}
                title={'Latviski'}
                onPress={() => onSelect('lv')}
                backgroundColor={colors.green}
            />
            <Card
                image={<GB style={{ width: 28, height: 20 }} />}
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
