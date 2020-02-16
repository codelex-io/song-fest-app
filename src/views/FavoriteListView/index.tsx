import React from 'react';
import { useFavourites } from '@domain/favourites';
import { default as FavoriteListViewComponent } from './component';
import { EmptyFavorite } from './component/EmptyFavorite';

const FavoriteListView: React.FC = () => {
    const { favourites, hasAnyItems } = useFavourites();
    if (hasAnyItems()) {
        return <FavoriteListViewComponent favourites={favourites} />;
    }
    return <EmptyFavorite />;
};

export default FavoriteListView;
