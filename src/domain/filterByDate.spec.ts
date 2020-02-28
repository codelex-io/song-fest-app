import moment from 'moment';
import filterEvents from './filterByDate';
import { DateAware } from './';

describe('Filter Events', () => {
    const items: DateAware[] = [
        {
            date: moment('2020-01-01'),
        },
        {
            date: moment('2020-01-02'),
        },
        {
            date: moment('2020-01-03'),
        },
        {
            date: moment('2020-01-05'),
        },
        {
            date: moment('2020-01-06'),
        },
        {
            date: moment('2020-01-12'),
        },
        {
            date: moment('2020-01-13'),
        },
    ];

    it('should return all when all selected', () => {
        const results = filterEvents(moment(), items, 'all');

        expect(results.length).toBe(items.length);
    });

    it('should return same day events', () => {
        const results = filterEvents(moment('2020-01-01'), items, 'today');

        expect(results.length).toBe(1);
        expect(results[0].date.isSame(items[0].date)).toBeTruthy();
    });

    it('should return tomorrow events', () => {
        const results = filterEvents(moment('2020-01-01'), items, 'tomorrow');

        expect(results.length).toBe(1);
        expect(results[0].date.isSame(items[1].date)).toBeTruthy();
    });

    it('should return this week events', () => {
        const results = filterEvents(moment('2020-01-05'), items, 'this-week');

        expect(results.length).toBe(2);
        expect(results[0].date.isSame(items[3].date)).toBeTruthy();
        expect(results[1].date.isSame(items[4].date)).toBeTruthy();
    });
});
