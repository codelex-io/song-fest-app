import { IconType } from '@components/Icon';
import { colors } from '@styles';

export interface ItemType {
    id: number;
    title: string;
    icon: IconType;
    backgroundColor: string;
    onOpen: any;
}

const execute = (route: string, isInternal: boolean, navigate: (route: string) => void) => {
    if (isInternal) {
        navigate(route);
        console.log('navigating to', route);
    } else {
        console.log('execute open browser');
    }
};

export const Items: ItemType[] = [
    {
        id: 0,
        title: 'Sponsoru Piedāvājums',
        icon: IconType.Gift,
        backgroundColor: colors.green,
        onOpen: (navigate: (route: string) => void) => execute('News', true, navigate),
    },
    {
        id: 1,
        title: 'Svarīgi \n zināt',
        icon: IconType.Alert,
        backgroundColor: colors.blue,
        onOpen: (navigate: (route: string) => void) => execute('Events', true, navigate),
    },
    {
        id: 2,
        title: 'Biežākie jautājumi',
        icon: IconType.HelpCircle,
        backgroundColor: colors.lightBlue,
        onOpen: (navigate: (route: string) => void) => execute('Map', true, navigate),
    },
    {
        id: 3,
        title: 'Transports pasākumā',
        icon: IconType.Bus,
        backgroundColor: colors.purple,
        onOpen: (navigate: (route: string) => void) => execute('Video', true, navigate),
    },
    {
        id: 4,
        title: 'Svētku info centrs',
        icon: IconType.Information,
        backgroundColor: colors.orange,
        onOpen: (navigate: (route: string) => void) => execute('More', true, navigate),
    },
    {
        id: 5,
        title: 'Akcija \n Zaļā pēda',
        icon: IconType.PineTreeBox,
        backgroundColor: colors.green,
        onOpen: (navigate: (route: string) => void) => execute('Favorites', true, navigate),
    },
    {
        id: 6,
        title: 'Svētku \n noteikumi',
        icon: IconType.FileDocumentBox,
        backgroundColor: colors.blue,
        onOpen: (navigate: (route: string) => void) => execute('News', true, navigate),
    },
    {
        id: 7,
        title: 'Informācija par kontaktiem',
        icon: IconType.Phone,
        backgroundColor: colors.lightBlue,
        onOpen: (navigate: (route: string) => void) => execute('News', true, navigate),
    },
    {
        id: 8,
        title: 'Lietotāja iestatījumi',
        icon: IconType.Settings,
        backgroundColor: colors.purple,
        onOpen: (navigate: (route: string) => void) => execute('Language', true, navigate),
    },
    {
        id: 9,
        title: 'Saturs\n vecākiem',
        icon: IconType.Parent,
        backgroundColor: colors.green,
        onOpen: (navigate: (route: string) => void) => execute('Language', true, navigate),
    },
    {
        id: 10,
        title: 'Valoda',
        icon: IconType.Settings,
        backgroundColor: colors.blue,
        onOpen: (navigate: (route: string) => void) => execute('Language', true, navigate),
    },
];
