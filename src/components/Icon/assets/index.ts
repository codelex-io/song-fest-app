import Calendar from './calendar.svg';
import Clock from './clock.svg';
import Heart from './heart.svg';
import Navigate from './navigate.svg';
import Share from './share.svg';
import { IconType } from '../index';

export const findIcon = (type: IconType) => {
    switch (type) {
        case IconType.Calendar:
            return Calendar;
        case IconType.Clock:
            return Clock;
        case IconType.Heart:
            return Heart;
        case IconType.Navigate:
            return Navigate;
        case IconType.Share:
            return Share;
        default:
            throw new Error(`Could not find icon by type '${type}'`);
    }
};
