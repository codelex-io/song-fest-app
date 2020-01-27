import React from 'react';
import { View } from 'react-native';
import { Svg } from 'react-native-svg';
import { findIcon } from './assets';

export enum IconType {
    Calendar = 'calendar',
    Clock = 'clock',
    Heart = 'heart',
    Navigate = 'navigate',
    Share = 'share',
    Map = 'map',
    More = 'more',
    News = 'news',
    Video = 'video',
}

interface IconProps {
    size: number;
    type: IconType;
    fill?: string;
}

const Icon: React.FC<IconProps> = ({ size, type, fill }) => {
    const SvgIcon = findIcon(type);
    return (
        <View style={{ height: size, width: size }}>
            <Svg>
                <SvgIcon height={size} width={size} fill={fill} />
            </Svg>
        </View>
    );
};

export default Icon;
