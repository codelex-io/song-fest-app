import React from 'react';
import Icon, { IconType } from './Icon';
import { View, StyleSheet } from 'react-native';

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
        color: '#F15A31',
        icon: IconType.News,
    },
    {
        key: 'Events',
        color: '#086BB5',
        icon: IconType.Calendar,
    },
    {
        key: 'Map',
        color: '#00A258',
        icon: IconType.Map,
    },
    {
        key: 'Video',
        color: '#0AB1CC',
        icon: IconType.Video,
    },
    {
        key: 'More',
        color: '#964082',
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
    const fill = focused ? '#ffffff' : color;
    const backgroundColor = focused ? color : '#ffffff';
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
