import React from 'react';
import { useFavourites } from '@domain/favourites';
import { default as FavoriteListViewComponent } from './component';
import { EmptyFavorite } from './component/EmptyFavorite';

const FavoriteListView: React.FC = () => {
    const { favourites } = useFavourites();
    if (favourites[0].items.length === 0 && favourites[1].items.length === 0) {
        return <EmptyFavorite />;
    }
    return <FavoriteListViewComponent favourites={favourites} />;
};

export default FavoriteListView;
