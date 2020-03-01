import React from 'react';
import { Text, View } from 'react-native';
import { colors } from '@styles';
import { IconType } from '../Icon';
import { SafeAreaConsumer } from 'react-native-safe-area-context';
import { IconBtn44 } from '@components/buttons';
import { styles } from './styles';

interface HeaderProps {
    title: string;
    goBack: () => void;
}

export const SimpleHeader: React.FC<HeaderProps> = ({ title, goBack }) => (
    <SafeAreaConsumer>
        {insets => (
            <View style={[styles.header, { marginTop: insets?.top }]}>
                <IconBtn44
                    style={styles.iconBox}
                    icon={IconType.ChevronLeft}
                    color={colors.darkGrey1A}
                    bgColor={colors.white}
                    onPress={goBack}
                />
                <Text style={styles.text}>{title}</Text>
            </View>
        )}
    </SafeAreaConsumer>
);
