import Share from 'react-native-share';

export const open = (link: string) => {
    Share.open({
        title: 'Share',
        url: link,
    }).catch(() => null);
};
