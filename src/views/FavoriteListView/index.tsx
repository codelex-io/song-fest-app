import React from 'react';
import { useFavourites } from '@domain/favourites';
import { default as FavoriteListViewComponent } from './component';
import { EmptyFavorite } from './component/EmptyFavorite';
import NavigationAware from '../../navigation/NavigationAware';

const FavoriteListView: React.FC<NavigationAware> = ({ navigation }) => {
    const { favourites, hasAnyItems, toggleFavourite } = useFavourites();
    if (hasAnyItems()) {
        return (
            <FavoriteListViewComponent
                navigation={navigation}
                favourites={favourites}
                onFavourite={item => toggleFavourite(item)}
            />
        );
    }
    return <EmptyFavorite />;
};

export default FavoriteListView;
