import mockAsyncStorage from '@utils/mock-async-storage';
import { fetchFavourites, storeFavourites } from './storage';
import moment from 'moment';
import { GroupOfFavourites, FavouriteEvent } from './types';

jest.mock('@react-native-community/async-storage', () => mockAsyncStorage);

describe('Storage', () => {
    beforeEach(() => mockAsyncStorage.reset());

    it('should handle json', async done => {
        const favourites: GroupOfFavourites[] = [
            {
                key: 'EVENTS',
                items: [
                    {
                        id: '1',
                        group: 'EVENTS',
                        title: 'event-title',
                        notification: {
                            id: '2',
                            fireDate: moment(),
                            title: 'notification-title',
                        },
                        date: '21.03.2020',
                        time: '12:30 - 18:00',
                    } as FavouriteEvent,
                ],
            },
            {
                key: 'NEWS',
                items: [
                    {
                        id: '11',
                        group: 'NEWS',
                        title: 'news-title',
                    },
                ],
            },
        ];

        await storeFavourites(favourites);

        const result = await fetchFavourites();

        try {
            expect(result).toEqual([
                {
                    key: 'EVENTS',
                    items: [
                        {
                            id: '1',
                            group: 'EVENTS',
                            title: 'event-title',
                            notification: {
                                id: '2',
                            },
                            date: '21.03.2020',
                            time: '12:30 - 18:00',
                        },
                    ],
                },
                {
                    key: 'NEWS',
                    items: [
                        {
                            id: '11',
                            group: 'NEWS',
                            title: 'news-title',
                        },
                    ],
                },
            ]);
            done();
        } catch (e) {
            done(e);
        }
    });
});
