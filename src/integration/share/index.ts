import Share from 'react-native-share';
import { errors } from '@utils';

const share = (link: string) => {
    Share.open({
        title: 'Share',
        url: link,
    }).catch(e => errors.onError(e, false));
};

export default share;
