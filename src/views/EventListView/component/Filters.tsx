import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextToggleBtn } from '@components/buttons';
import { LocalizationContext } from '../../../localization/LocalizationContext';
import { colors } from '@styles';
import { TimeSelector } from '@domain';

interface FiltersProps {
    activeKey: string;
    onPress: (key: TimeSelector) => void;
}
const Filters: React.FC<FiltersProps> = ({ activeKey, onPress }) => {
    const { translations } = useContext(LocalizationContext);
    return (
        <View style={styles.searchContainerButton}>
            <TextToggleBtn
                title={translations.getString('TODAY')}
                active={activeKey === 'today'}
                onPress={() => onPress('today')}
                primaryColor={colors.white}
                secondaryColor={colors.green}
            />
            <TextToggleBtn
                title={translations.getString('TOMORROW')}
                active={activeKey === 'tomorrow'}
                onPress={() => onPress('tomorrow')}
                primaryColor={colors.white}
                secondaryColor={colors.green}
            />
            <TextToggleBtn
                title={translations.getString('THIS_WEEK')}
                active={activeKey === 'this-week'}
                onPress={() => onPress('this-week')}
                primaryColor={colors.white}
                secondaryColor={colors.green}
            />
            <TextToggleBtn
                title={translations.getString('OTHERS')}
                active={activeKey === 'all'}
                onPress={() => onPress('all')}
                primaryColor={colors.white}
                secondaryColor={colors.green}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    searchContainerButton: {
        flexDirection: 'row',
        paddingLeft: 16,
        paddingRight: 8,
        paddingBottom: 16,
    },
});

export default Filters;
