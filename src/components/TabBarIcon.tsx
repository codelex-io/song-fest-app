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
        key: 'NEWS',
        color: colors.orange,
        icon: IconType.News,
    },
    {
        key: 'EVENTS',
        color: colors.blue,
        icon: IconType.Calendar,
    },
    {
        key: 'MAP',
        color: colors.green,
        icon: IconType.Map,
    },
    {
        key: 'VIDEO',
        color: colors.lightBlue,
        icon: IconType.Video,
    },
    {
        key: 'MORE',
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

    if (route === 'VIDEO') {
        return (
            <View style={[styles.container, { backgroundColor: colors.extrLighgrey6E }]}>
                <Icon type={icon} fill={'gray'} />
            </View>
        );
    }

    return (
        <View style={[styles.container, { backgroundColor }]}>
            <Icon type={icon} fill={fill} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingVertical: 20,
        width: '100%',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
    },
});
