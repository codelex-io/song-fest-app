import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextToggleBtn } from '@components/buttons';
import { LocalizationContext } from '../../localization/LocalizationContext';
import { colors } from '@styles';

interface FilterProps {
    activeKey: string;
    onPress: (key: string) => void;
    options: ViewsHeaderFilterOption[];
}

export interface ViewsHeaderFilterOption {
    key: string;
    title: string;
}
const ViewsHeaderFilter: React.FC<FilterProps> = ({ activeKey, onPress, options }) => {
    const { translations } = useContext(LocalizationContext);
    return (
        <View style={styles.searchContainerButton}>
            {options.map(({ key, title }: ViewsHeaderFilterOption) => (
                <TextToggleBtn
                    key={key}
                    title={translations.getString(title)}
                    active={activeKey === key}
                    onPress={() => onPress(key)}
                    primaryColor={colors.white}
                    secondaryColor={colors.green}
                />
            ))}
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

export default ViewsHeaderFilter;
