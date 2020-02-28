import Share from 'react-native-share';
import { errors } from '@utils';

export const open = (link: string) => {
    Share.open({
        title: 'Share',
        url: link,
    }).catch(errors.onError);
};
