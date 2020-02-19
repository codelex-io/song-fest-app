import { Moment } from 'moment';
import { TimeSelector, DateAware } from './';

const filterEvents = <T extends DateAware>(today: Moment, items: T[], selector: TimeSelector): T[] => {
    const currentWeek = today.week();

    return items.filter(it => {
        if (selector === 'today') {
            return it.date.isSame(today);
        }
        if (selector === 'tomorrow') {
            return it.date.isSame(today.clone().add(1, 'days'));
        }
        if (selector === 'this-week') {
            return it.date.week() === currentWeek;
        }
        return true;
    });
};

export default filterEvents;
