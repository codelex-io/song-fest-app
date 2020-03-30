import React from 'react';
import { useFavourites } from '@domain/favourites';
import FavoriteListViewComponent from './component';
import NoFavorites from './component/NoFavorites';
import { Favourite } from '@domain/favourites/types';
import { RootNavProps } from '@navigation';

const FavoriteListView: React.FC<RootNavProps<'Favorites'>> = ({ navigation }) => {
    const { favourites, hasAnyItems, toggleFavourite } = useFavourites();

    const navigateToArticle = (item: Favourite) => {
        navigation.navigate('Article', {
            group: item.group,
            itemId: item.id,
            hasHistory: true,
        });
    };

    if (!hasAnyItems()) {
        return <NoFavorites goBack={() => navigation.goBack()} />;
    }

    return (
        <FavoriteListViewComponent
            favourites={favourites}
            onNavigate={(item: Favourite) => navigateToArticle(item)}
            onFavourite={(item: Favourite) => toggleFavourite(item)}
            goBack={() => navigation.goBack()}
        />
    );
};

export default FavoriteListView;
