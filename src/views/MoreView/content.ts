import { IconType } from '@components/Icon';
import { colors } from '@styles';
import { Linking } from 'react-native';
import { errors } from '@utils';

export interface ItemType {
    id: number;
    title: string;
    icon: IconType;
    backgroundColor: string;
    onOpen: (navigate: (route: string) => void) => void;
    disabled: boolean;
}

type TypeOfLink = 'external' | 'internal';

const execute = (route: string, typeOfLink: TypeOfLink, navigate: (route: string) => void) => {
    if (typeOfLink === 'internal') {
        navigate(route);
    } else {
        Linking.canOpenURL(route)
            .then(supported => {
                if (supported) {
                    return Linking.openURL(route);
                }
            })
            .catch(errors.onError);
    }
};

export const Items: ItemType[] = [
    {
        id: 0,
        title: 'SPONSORS',
        icon: IconType.Gift,
        backgroundColor: colors.green,
        onOpen: (navigate: (route: string) => void) =>
            execute(
                'https://www.google.com/search?q=sponsoru+pied%C4%81v%C4%81jums&oq=sponso&aqs=chrome.0.69i59j69i57j0l5j69i60.1224j0j4&sourceid=chrome&ie=UTF-8',
                'external',
                navigate,
            ),
        disabled: true,
    },
    {
        id: 1,
        title: 'IMPORTANT_TO_KNOW',
        icon: IconType.Alert,
        backgroundColor: colors.blue,
        onOpen: (navigate: (route: string) => void) => execute('Events', 'internal', navigate),
        disabled: true,
    },
    {
        id: 2,
        title: 'QUESTIONS',
        icon: IconType.HelpCircle,
        backgroundColor: colors.lightBlue,
        onOpen: (navigate: (route: string) => void) => execute('Map', 'internal', navigate),
        disabled: true,
    },
    {
        id: 3,
        title: 'TRANSPORTATION',
        icon: IconType.Bus,
        backgroundColor: colors.yellow,
        onOpen: (navigate: (route: string) => void) => execute('Video', 'internal', navigate),
        disabled: true,
    },
    {
        id: 4,
        title: 'INFO_CENTER',
        icon: IconType.Information,
        backgroundColor: colors.orange,
        onOpen: (navigate: (route: string) => void) => execute('More', 'internal', navigate),
        disabled: true,
    },
    {
        id: 5,
        title: 'GREEN_FOOT',
        icon: IconType.PineTreeBox,
        backgroundColor: colors.green,
        onOpen: (navigate: (route: string) => void) => execute('Favorites', 'internal', navigate),
        disabled: true,
    },
    {
        id: 6,
        title: 'RULES',
        icon: IconType.FileDocumentBox,
        backgroundColor: colors.blue,
        onOpen: (navigate: (route: string) => void) => execute('News', 'internal', navigate),
        disabled: true,
    },
    {
        id: 7,
        title: 'INFORMATION_CONTACTS',
        icon: IconType.Phone,
        backgroundColor: colors.lightBlue,
        onOpen: (navigate: (route: string) => void) => execute('News', 'internal', navigate),
        disabled: true,
    },
    {
        id: 8,
        title: 'USER_SETTINGS',
        icon: IconType.Settings,
        backgroundColor: colors.yellow,
        onOpen: (navigate: (route: string) => void) => execute('UserCategory', 'internal', navigate),
        disabled: false,
    },
    {
        id: 9,
        title: 'FOR_PARENTS',
        icon: IconType.Parent,
        backgroundColor: colors.green,
        onOpen: (navigate: (route: string) => void) => execute('Language', 'internal', navigate),
        disabled: true,
    },
    {
        id: 10,
        title: 'LANGUAGE',
        icon: IconType.Settings,
        backgroundColor: colors.blue,
        onOpen: (navigate: (route: string) => void) => execute('Language', 'internal', navigate),
        disabled: false,
    },
];
