import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { colors, typography } from '@styles';
import { IconType } from '../Icon';
import { IconBtn44 } from '@components/buttons';
import { StackNavigationProp } from '@react-navigation/stack';
import { SharedStackParamsList } from 'src/navigation/stacks/SharedStack';

interface HeaderProps {
    title: string;
    navigation: StackNavigationProp<
        SharedStackParamsList,
        'Feed' | 'Favorites' | 'Article' | 'Search' | 'UserSettings'
    >;
}

export const SimpleHeader: React.FC<HeaderProps> = ({ title, navigation }) => (
    <View style={styles.header}>
        <IconBtn44
            style={styles.iconBox}
            icon={IconType.ChevronLeft}
            color={colors.darkGrey1A}
            bgColor={colors.white}
            onPress={() => navigation.goBack()}
        />
        <Text style={styles.simpleText}>{title}</Text>
    </View>
);

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    iconBox: {
        margin: 6,
    },
    simpleText: {
        fontFamily: typography.bold,
        fontSize: 20,
        height: 26,
        letterSpacing: 0.0015,
        color: colors.darkGrey1A,
        textTransform: 'uppercase',
    },
});
