import React from 'react';
import { useFavourites } from '@domain/favourites';
import { default as FavoriteListViewComponent } from './component';
import { EmptyFavorite } from './component/EmptyFavorite';

const FavoriteListView: React.FC = () => {
    const { favourites, hasAnyItems, toggleFavourite } = useFavourites();
    if (hasAnyItems()) {
        return <FavoriteListViewComponent favourites={favourites} onFavourite={item => toggleFavourite(item)} />;
    }
    return <EmptyFavorite />;
};

export default FavoriteListView;
