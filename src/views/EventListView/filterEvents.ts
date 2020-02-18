import { Moment } from 'moment';
import { EventItem } from './types';
import { TimeSelector } from '@domain';

const filterEvents = (today: Moment, items: EventItem[], selector: TimeSelector): EventItem[] => {
    var weekNow = today.week();

    return items.filter(it => {
        if (selector === 'today') {
            return it.date.isSame(today);
        }
        if (selector === 'tomorrow') {
            return it.date.isSame(today.clone().add(1, 'days'));
        }
        if (selector === 'this-week') {
            return it.date.week();
        }
        return true;
    });
};

export default filterEvents;
