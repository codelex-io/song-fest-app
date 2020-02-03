import moment from 'moment';

export const formatDate = (source: string) => moment(source).format('YYYY-MM-DD');
