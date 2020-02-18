import moment, { Moment } from 'moment';

export const formatDate = (source: string) => moment(source).format('YYYY-MM-DD');

export const formatDateMoment = (source: Moment) => source.format('YYYY-MM-DD');
