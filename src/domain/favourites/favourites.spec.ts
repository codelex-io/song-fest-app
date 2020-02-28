import {
    addFavourite,
    getFavourites,
    removeFavourite,
    clear,
    isFavourite,
    toggleFavourite,
    hasAnyItems,
} from './index';

jest.mock('./storage', () => ({
    fetchFavourites: async () => [],
    storeFavourites: async () => null,
}));

describe('Favourites', () => {
    beforeEach(() => clear());

    const title = 'random title';

    it('should be able to add favourite', () => {
        addFavourite({ id: '123', group: 'NEWS', title });

        const favourites = getFavourites();

        expect(favourites).toEqual([{ key: 'NEWS', items: [{ id: '123', group: 'NEWS', title }] }]);
    });

    it('should not add duplicate value', () => {
        addFavourite({ id: '123', group: 'NEWS', title });
        addFavourite({ id: '123', group: 'NEWS', title });

        const favourites = getFavourites();

        expect(favourites).toEqual([{ key: 'NEWS', items: [{ id: '123', group: 'NEWS', title }] }]);
    });

    it('should add multiple favourites', () => {
        addFavourite({ id: '123', group: 'NEWS', title });
        addFavourite({ id: '456', group: 'NEWS', title });
        addFavourite({ id: '123', group: 'EVENTS', title });
        addFavourite({ id: '456', group: 'EVENTS', title });

        const favourites = getFavourites();

        expect(favourites).toEqual([
            {
                key: 'NEWS',
                items: [
                    { id: '123', group: 'NEWS', title },
                    { id: '456', group: 'NEWS', title },
                ],
            },
            {
                key: 'EVENTS',
                items: [
                    { id: '123', group: 'EVENTS', title },
                    { id: '456', group: 'EVENTS', title },
                ],
            },
        ]);
    });

    it('should be able to remove favourite', () => {
        addFavourite({ id: '123', group: 'NEWS', title });
        addFavourite({ id: '456', group: 'NEWS', title });
        addFavourite({ id: '123', group: 'EVENTS', title });

        removeFavourite({ id: '123', group: 'NEWS', title });

        const favourites = getFavourites();

        expect(favourites).toEqual([
            { key: 'NEWS', items: [{ id: '456', group: 'NEWS', title }] },
            { key: 'EVENTS', items: [{ id: '123', group: 'EVENTS', title }] },
        ]);
    });

    it('should check it is favourite when no favourites added', () => {
        expect(isFavourite({ id: '123', group: 'NEWS', title })).toBeFalsy();
    });

    it('should check it is favourite when no favourites in the same group added', () => {
        addFavourite({ id: '123', group: 'EVENTS', title });

        expect(isFavourite({ id: '123', group: 'NEWS', title })).toBeFalsy();
    });

    it('it should find that item was favourited', () => {
        addFavourite({ id: '123', group: 'NEWS', title });

        expect(isFavourite({ id: '123', group: 'NEWS', title })).toBeTruthy();
    });

    it('it should toggle favourite', () => {
        toggleFavourite({ id: '123', group: 'NEWS', title });

        expect(isFavourite({ id: '123', group: 'NEWS', title })).toBeTruthy();

        toggleFavourite({ id: '123', group: 'NEWS', title });

        expect(isFavourite({ id: '123', group: 'NEWS', title })).toBeFalsy();
    });

    it('should check if any present', () => {
        expect(hasAnyItems()).toBeFalsy();

        toggleFavourite({ id: '123', group: 'NEWS', title });
        toggleFavourite({ id: '456', group: 'NEWS', title });

        expect(hasAnyItems()).toBeTruthy();

        toggleFavourite({ id: '123', group: 'NEWS', title });

        expect(hasAnyItems()).toBeTruthy();

        toggleFavourite({ id: '456', group: 'NEWS', title });

        expect(hasAnyItems()).toBeFalsy();
    });
});
