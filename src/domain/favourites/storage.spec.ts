import mockAsyncStorage from '@utils/mock-async-storage';
import { fetchFavourites, storeFavourites } from './storage';
import moment from 'moment';
import { Favourite, GroupOfFavourites } from './types';

jest.mock('@react-native-community/async-storage', () => mockAsyncStorage);

describe('Storage', () => {
    beforeEach(() => mockAsyncStorage.reset());

    it('should handle json', async done => {
        const favourite: Favourite = {
            id: '1',
            group: 'EVENTS',
            title: 'event-title',
            notification: {
                id: '2',
                fireDate: moment(),
                title: 'notification-title',
            },
        };
        const favourites: GroupOfFavourites[] = [
            {
                key: 'EVENTS',
                items: [favourite],
            },
        ];

        await storeFavourites(favourites);

        const result = await fetchFavourites();

        try {
            expect(result[0].items[0]).toEqual({ ...favourite, notification: { id: '2' } });
            done();
        } catch (e) {
            done(e);
        }
    });
});
