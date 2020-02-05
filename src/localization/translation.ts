import LocalizedStrings from 'react-native-localization';
export const DEFAULT_LANGUAGE = 'en';

const translations = {
    en: {
        EVENTS: 'Events',
        MAP: 'Map',
        MORE: 'More',
        CHANGE_LANGUAGE: 'Change Language',
        LANGUAGE_SETTINGS: 'Language settings',
        NEWS: 'News',
        VIDEO: 'Video',
        BACK: 'Back',
    },
    lv: {
        EVENTS: 'Pasākumi',
        MAP: 'Karte',
        MORE: 'Vairāk',
        CHANGE_LANGUAGE: 'Nomainīt valodu',
        LANGUAGE_SETTINGS: 'Valodas iestatījumi',
        NEWS: 'Ziņas',
        VIDEO: 'video',
        BACK: 'Atpakaļ',
    },
};

export default new LocalizedStrings(translations);
