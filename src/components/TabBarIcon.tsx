import React from 'react';
import { View, StyleSheet } from 'react-native';
import Icon, { IconType } from './Icon';
import { colors } from '@styles';

interface Props {
    route: string;
    focused: boolean;
}

interface TabDescriptor {
    key: string;
    color: string;
    icon: IconType;
}

const tabs: TabDescriptor[] = [
    {
        key: 'News',
        color: colors.orange,
        icon: IconType.News,
    },
    {
        key: 'Events',
        color: colors.blue,
        icon: IconType.Calendar,
    },
    {
        key: 'Map',
        color: colors.green,
        icon: IconType.Map,
    },
    {
        key: 'Video',
        color: colors.lightBlue,
        icon: IconType.Video,
    },
    {
        key: 'More',
        color: colors.purple,
        icon: IconType.More,
    },
];

const findTab = (route: string): TabDescriptor => {
    const tab = tabs.find(it => it.key === route);
    if (!tab) {
        throw new Error(`Could not find tab by '${route}'`);
    }
    return tab;
};

export const TabBarIcon: React.FC<Props> = ({ route, focused }) => {
    const { color, icon } = findTab(route);
    const fill = focused ? colors.white : color;
    const backgroundColor = focused ? color : colors.white;
    return (
        <View style={[styles.container, { backgroundColor }]}>
            <Icon size={24} type={icon} fill={fill} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 64,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 8,
    },
});
