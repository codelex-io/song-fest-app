import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Icon, IconType } from '@components';
import { colors } from '@styles';

export default class AllIcons extends React.Component {
    render() {
        const fill = colors.darkGrey1A;
        return (
            <View style={styles.container}>
                {Object.keys(IconType).map(it => (
                    <Icon key={it} size={24} type={it as IconType} fill={fill} />
                ))}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
});
