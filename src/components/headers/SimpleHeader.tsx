import React from 'react';
import { Text, View, Platform } from 'react-native';
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
            <View style={[styles.header, { marginTop: Platform.OS === 'ios' ? insets?.top : 0, backgroundColor: colors.white }]}>
                <IconBtn44
                    style={styles.iconBox}
                    icon={IconType.ChevronLeft}
                    color={colors.darkGrey1A}
                    bgColor={colors.white}
                    onPress={goBack}
                />
                <Text style={styles.simpleText}>{title}</Text>
            </View>
        )}
    </SafeAreaConsumer>
);
