import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { findIcon } from './assets';

export enum IconType {
    Yoga = 'Yoga',
    Parent = 'Parent',
    Eye = 'Eye',
    HeartFilled = 'HeartFilled',
    Share = 'Share',
    Heart = 'Heart',
    News = 'News',
    Calendar = 'Calendar',
    Map = 'Map',
    Video = 'Video',
    More = 'More',
    Search = 'Search',
    Clock = 'Clock',
    Navigation = 'Navigation',
    CrosshairsGPS = 'CrosshairsGPS',
    MenuDown = 'MenuDown',
    Gift = 'Gift',
    Alert = 'Alert',
    HelpCircle = 'HelpCircle',
    Bus = 'Bus',
    Information = 'Information',
    PineTreeBox = 'PineTreeBox',
    FileDocumentBox = 'FileDocumentBox',
    Phone = 'Phone',
    Settings = 'Settings',
    ChevronLeft = 'ChevronLeft',
    ChevronRight = 'ChevronRight',
    RadioBoxBlank = 'RadioBoxBlank',
    RadioBoxMarked = 'RadioBoxMarked',
    Filter = 'Filter',
}

interface IconProps {
    size?: number;
    fill?: string;
    type?: IconType;
    style?: { [key: string]: string | number };
}

export const Icon: React.FC<IconProps> = ({ size = 24, fill = 'blue', type = IconType.Yoga, style }) => {
    return (
        <Svg width={size} height={size} viewBox="0 0 24 24" style={{ ...style }}>
            <Path {...findIcon(type)} fill={fill} />
        </Svg>
    );
};

export default Icon;
