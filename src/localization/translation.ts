import LocalizedStrings from 'react-native-localization';

const translations = {
    lv: {
        EVENTS: 'Pasākumi',
        MAP: 'Karte',
        MORE: 'Vairāk',
        CHANGE_LANGUAGE: 'Nomainīt valodu',
        LANGUAGE_SETTINGS: 'Valodas iestatījumi',
        NEWS: 'Jaunumi',
        VIDEO: 'video',
        BACK: 'Atpakaļ',
    },
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
};

export default new LocalizedStrings(translations);
