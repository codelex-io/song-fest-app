import { IconType } from '@components/Icon';
import { colors } from '@styles';
import { Linking } from 'react-native';

export interface ItemType {
    id: number;
    title: string;
    icon: IconType;
    backgroundColor: string;
    onOpen: (navigate: (route: string) => void) => void;
}

type TypeOfLink = 'external' | 'internal';

const execute = (route: string, typeOfLink: TypeOfLink, navigate: (route: string) => void) => {
    if (typeOfLink === 'internal') {
        navigate(route);
        console.log('navigating to', route);
    } else {
        Linking.canOpenURL(route)
            .then(supported => {
                if (!supported) {
                    console.log("Can't handle url: " + route);
                } else {
                    return Linking.openURL(route);
                }
            })
            .catch(err => console.error('An error occurred', err));
    }
};

export const Items: ItemType[] = [
    {
        id: 0,
        title: 'Sponsoru Piedāvājums',
        icon: IconType.Gift,
        backgroundColor: colors.green,
        onOpen: (navigate: (route: string) => void) =>
            execute(
                'https://www.google.com/search?q=sponsoru+pied%C4%81v%C4%81jums&oq=sponso&aqs=chrome.0.69i59j69i57j0l5j69i60.1224j0j4&sourceid=chrome&ie=UTF-8',
                'external',
                navigate,
            ),
    },
    {
        id: 1,
        title: 'Svarīgi \n zināt',
        icon: IconType.Alert,
        backgroundColor: colors.blue,
        onOpen: (navigate: (route: string) => void) => execute('Events', 'internal', navigate),
    },
    {
        id: 2,
        title: 'Biežākie jautājumi',
        icon: IconType.HelpCircle,
        backgroundColor: colors.lightBlue,
        onOpen: (navigate: (route: string) => void) => execute('Map', 'internal', navigate),
    },
    {
        id: 3,
        title: 'Transports pasākumā',
        icon: IconType.Bus,
        backgroundColor: colors.purple,
        onOpen: (navigate: (route: string) => void) => execute('Video', 'internal', navigate),
    },
    {
        id: 4,
        title: 'Svētku info centrs',
        icon: IconType.Information,
        backgroundColor: colors.orange,
        onOpen: (navigate: (route: string) => void) => execute('More', 'internal', navigate),
    },
    {
        id: 5,
        title: 'Akcija \n Zaļā pēda',
        icon: IconType.PineTreeBox,
        backgroundColor: colors.green,
        onOpen: (navigate: (route: string) => void) => execute('Favorites', 'internal', navigate),
    },
    {
        id: 6,
        title: 'Svētku \n noteikumi',
        icon: IconType.FileDocumentBox,
        backgroundColor: colors.blue,
        onOpen: (navigate: (route: string) => void) => execute('News', 'internal', navigate),
    },
    {
        id: 7,
        title: 'Informācija par kontaktiem',
        icon: IconType.Phone,
        backgroundColor: colors.lightBlue,
        onOpen: (navigate: (route: string) => void) => execute('News', 'internal', navigate),
    },
    {
        id: 8,
        title: 'Lietotāja iestatījumi',
        icon: IconType.Settings,
        backgroundColor: colors.purple,
        onOpen: (navigate: (route: string) => void) => execute('Language', 'internal', navigate),
    },
    {
        id: 9,
        title: 'Saturs\n vecākiem',
        icon: IconType.Parent,
        backgroundColor: colors.green,
        onOpen: (navigate: (route: string) => void) => execute('Language', 'internal', navigate),
    },
    {
        id: 10,
        title: 'Valoda',
        icon: IconType.Settings,
        backgroundColor: colors.blue,
        onOpen: (navigate: (route: string) => void) => execute('Language', 'internal', navigate),
    },
];
