import moment, { Moment } from 'moment';
import 'moment/locale/lv';

moment.locale('lv');

export const formatDate = (source: string) => moment(source).format('DD.MM.YYYY');
export const formatDateDay = (source: Moment) => moment(source).format('dddd, DD. MMMM ');
export const formatDateOpen = (source: string) => moment(source).format('DD.MM');

export const formatDateMoment = (source: Moment) => source.format('YYYY-MM-DD');
