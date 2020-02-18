import moment from 'moment';
import _ from 'lodash';
import filterEvents from './filterEvents';
import { EventItem } from './types';

describe('Filter Events', () => {
    const events: EventItem[] = [
        {
            id: '1',
            date: moment('2020-01-01'),
            title: 'Mūsdienu deju lieluzveduma modelēšanas koncerts „Augstāk par zemi” un finālkonkurss',
            locationTitle: '123',
            location: { latitude: 1, longitude: 1 },
            time: '12.30 - 18.00',
            isFavourite: false,
        },
        {
            id: '2',
            date: moment('2020-01-02'),
            title: 'XII Latvijas Skolu jaunatnes dziesmu un deju svētku ieskaņas pasākums Kuldīgas novadā',
            locationTitle: '123',
            location: { latitude: 1, longitude: 1 },
            time: 'Visu dienu',
            isFavourite: false,
        },
        {
            id: '3',
            date: moment('2020-01-03'),
            title: 'Mūsdienu deju lieluzveduma modelēšanas koncerts „Augstāk par zemi” un finālkonkurss',
            locationTitle: '123',
            location: { latitude: 1, longitude: 1 },
            time: '12.30 - 18.00',
            isFavourite: false,
        },
    ];

    it('should return all when all selected', () => {
        const results = filterEvents(moment(), events, 'all');

        expect(results.length).toBe(3);
    });

    it('should return same day events', () => {
        const results = filterEvents(moment('2020-01-01'), events, 'today');

        expect(results.length).toBe(1);
        expect(results[0].id).toBe('1');
    });

    it('should return tomorrows events', () => {
        const results = filterEvents(moment('2020-01-01'), events, 'tomorrow');

        expect(results.length).toBe(1);
        expect(results[0].id).toBe('2');
    });
    it('should return this weeks events', () => {
        const results = filterEvents(moment('2020-01-01'), events, 'this-week');

        expect(results.length).toBe(3);
        expect(results[2].id).toBe('3');
    });
});
