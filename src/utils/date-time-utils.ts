import moment, { Moment } from 'moment';
import 'moment/locale/lv';

moment.locale('lv');

export const DEFAULT_DATE_FORMAT = 'DD.MM.YYYY.';

export const formatDate = (source: string | Moment, format: string = DEFAULT_DATE_FORMAT) => {
    if (typeof source === 'string') {
        return moment(source).format(format);
    }
    return (source as Moment).format(format);
};
export const formatDateDay = (source: Moment) => moment(source).format('dddd, DD. MMMM ');
export const formatDateOpen = (source: string) => moment(source).format('DD.MM');

export const formatDateMoment = (source: Moment) => source.format('YYYY-MM-DD');
