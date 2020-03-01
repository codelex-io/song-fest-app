import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { colors } from '@styles';
import Icon, { IconType } from '../Icon';
import { SafeAreaConsumer } from 'react-native-safe-area-context';
import { styles } from './styles';

interface HeaderProps {
    title: string;
    goBack: () => void;
}

export const SimpleHeader: React.FC<HeaderProps> = ({ title, goBack }) => (
    <SafeAreaConsumer>
        {insets => (
            <View style={{ paddingTop: insets?.top }}>
                <View style={styles.header}>
                    <TouchableOpacity style={styles.iconBox} onPress={goBack}>
                        <Icon type={IconType.ChevronLeft} fill={colors.darkGrey1A} />
                    </TouchableOpacity>
                    <Text style={styles.text}>{title}</Text>
                </View>
            </View>
        )}
    </SafeAreaConsumer>
);
