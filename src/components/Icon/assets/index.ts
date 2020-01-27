import Calendar from './calendar.svg';
import Clock from './clock.svg';
import Heart from './heart.svg';
import Navigate from './navigate.svg';
import Share from './share.svg';
import Map from './map.svg';
import More from './more.svg';
import News from './news.svg';
import Video from './video.svg';
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
        case IconType.Map:
            return Map;
        case IconType.More:
            return More;
        case IconType.News:
            return News;
        case IconType.Video:
            return Video;
        default:
            throw new Error(`Could not find icon by type '${type}'`);
    }
};
