import React from 'react';
import { useFavourites, FavouritesContextProvider } from '@domain/favourites';
import { default as FavoriteListViewComponent } from './component';

const FavoriteListView: React.FC = () => {
    const { favourites } = useFavourites();
    return <FavoriteListViewComponent favourites={favourites} />;
};

export default () => (
    <FavouritesContextProvider>
        <FavoriteListView />
    </FavouritesContextProvider>
);
