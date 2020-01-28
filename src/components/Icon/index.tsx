import React from 'react';
import { View } from 'react-native';
import { Svg } from 'react-native-svg';
import { findIcon } from './assets';

export enum IconType {
    Account = 'Account',
    Alert = 'Alert',
    AppsBox = 'AppsBox',
    Artist = 'Artist',
    AttachMoney = 'AttachMoney',
    Balloon = 'Balloon',
    Bullhorn = 'Bullhorn',
    Bus = 'Bus',
    CalendarAlert = 'CalendarAlert',
    CalendarClock = 'CalendarClock',
    Calendar = 'Calendar',
    Camcorder = 'Camcorder',
    ChevronLeft = 'ChevronLeft',
    ChevronRight = 'ChevronRight',
    Clock = 'Clock',
    Close = 'Close',
    Cookie = 'Cookie',
    CrosshairsGPS = 'CrosshairsGPS',
    Dance = 'Dance',
    DirectionsBus = 'DirectionsBus',
    DotsHorizontal = 'DotsHorizontal',
    DotsVertical = 'DotsVertical',
    Eye = 'Eye',
    FileDocumentBox = 'FileDocumentBox',
    Filter = 'Filter',
    Fire = 'Fire',
    Flower = 'Flower',
    Gift = 'Gift',
    Heart = 'Heart',
    HeartFilled = 'HeartFilled',
    HelpOutline = 'HelpOutline',
    HelpCircle = 'HelpCircle',
    HumanMaleFemale = 'HumanMaleFemale',
    HumanMaleGirl = 'HumanMaleGirl',
    ImageFilterVintage = 'ImageFilterVintage',
    Info = 'Info',
    Information = 'Information',
    Itunes = 'Itunes',
    Kas = 'Kas',
    LibraryVideo = 'LibraryVideo',
    Map = 'Map',
    MapMarker = 'MapMarker',
    Menu = 'Menu',
    MenuDown = 'MenuDown',
    More = 'More',
    MusicNoteEighth = 'MusicNoteEighth',
    Navigation = 'Navigation',
    NewReleases = 'NewReleases',
    News = 'News',
    OndemandVideo = 'OndemandVideo',
    OpenInNew = 'OpenInNew',
    Parent = 'Parent',
    Parking = 'Parking',
    PartyPopper = 'PartyPopper',
    Phone = 'Phone',
    PineTreeBox = 'PineTreeBox',
    Pizza = 'Pizza',
    Place = 'Place',
    PlayCircle = 'PlayCircle',
    RadioBoxBlank = 'RadioBoxBlank',
    RadioBoxMarked = 'RadioBoxMarked',
    Saxophone = 'Saxophone',
    Scooter = 'Scooter',
    Search = 'Search',
    Settings = 'Settings',
    Share = 'Share',
    ShoePrint = 'ShoePrint',
    SilverwareForkKnife = 'SilverwareForkKnife',
    Social = 'Social',
    Star = 'Star',
    Video = 'Video',
    Whatshot = 'Whatshot',
    Yoga = 'Yoga',
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
