import { Moment } from 'moment';
import filterByDate from './filterByDate';

export type TimeSelector = 'today' | 'tomorrow' | 'this-week' | 'all';

export type VideoSelector = 'online' | 'popular' | 'latest';
export interface DateAware {
    date: Moment;
}

export { filterByDate };
