import React from 'react';
import { useFavourites } from '@domain/favourites';
import FavoriteListViewComponent from './component';
import { SharedStackNavList } from 'src/navigation/stacks/SharedStack';
import NoFavorites from './component/NoFavorites';
import { Favourite } from '@domain/favourites/types';

const FavoriteListView: React.FC<SharedStackNavList<'Favorites'>> = ({ navigation }) => {
    const { favourites, hasAnyItems, toggleFavourite } = useFavourites();

    return hasAnyItems() ? (
        <FavoriteListViewComponent
            favourites={favourites}
            onNavigate={(item: Favourite) => navigation.navigate('Article', { itemId: item.id, group: item.group })}
            onFavourite={(item: Favourite) => toggleFavourite(item)}
            goBack={() => navigation.goBack()}
        />
    ) : (
        <NoFavorites goBack={() => navigation.goBack()} />
    );
};

export default FavoriteListView;
