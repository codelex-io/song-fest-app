import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { IconType } from '@components';
import { colors } from '@styles';
import { Card } from './Card';
import { UserType } from '@domain/settings';
import { LocalizationContext } from '../../localization/LocalizationContext';

interface Props {
    onSelect: (userType: UserType) => void;
}

export const UserCategoryView: React.FC<Props> = ({ onSelect }) => {
    const { translations } = useContext(LocalizationContext);
    return (
        <View style={styles.container}>
            <Card
                icon={IconType.Start}
                title={translations.getString('PARTICIPANT')}
                backgroundColor={colors.blue}
                onPress={() => onSelect('participant')}
            />
            <Card
                icon={IconType.Parent}
                title={translations.getString('PARENT')}
                backgroundColor={colors.green}
                onPress={() => onSelect('parent')}
            />
            <Card
                icon={IconType.Eye}
                title={translations.getString('VISITOR')}
                backgroundColor={colors.orange}
                onPress={() => onSelect('visitor')}
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
