import React from 'react';
import { View } from 'react-native';
import { Icon, IconType } from '@components';

export const MyLocationButton = () => {
    return (
        <View>
            <Icon type={IconType.CrosshairsGPS} size={25} fill="black" />
        </View>
    );
};
