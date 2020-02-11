import Share from 'react-native-share';

export const open = (link: string) => {
    Share.open({
        title: 'Share',
        url: link,
    })
        .then(res => {
            console.log(res);
        })
        .catch(err => {
            err && console.log(err);
        });
};
