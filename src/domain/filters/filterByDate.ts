import moment from 'moment';
import { TimeSelector, DateAware } from './';

const filterEvents = <T extends DateAware>(items: T[], selector: TimeSelector, today = moment()): T[] => {
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
