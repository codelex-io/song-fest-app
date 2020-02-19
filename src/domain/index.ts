import { Moment } from 'moment';
import filterByDate from './filterByDate';

export type TimeSelector = 'today' | 'tomorrow' | 'this-week' | 'all';

export interface DateAware {
    date: Moment;
}

export { filterByDate };
