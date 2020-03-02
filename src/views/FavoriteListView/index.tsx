import React from 'react';
import { useFavourites } from '@domain/favourites';
import { default as FavoriteListViewComponent } from './component';
import { EmptyFavorite } from './component/EmptyFavorite';
import { SharedStackNavList } from 'src/navigation/stacks/SharedStack';

const FavoriteListView: React.FC<SharedStackNavList<'Favorites'>> = ({ navigation }) => {
    const { favourites, hasAnyItems, toggleFavourite } = useFavourites();
    if (hasAnyItems()) {
        return (
            <FavoriteListViewComponent
                favourites={favourites}
                onNavigate={item => navigation.navigate('Article', { itemId: item.id, group: item.group })}
                onFavourite={item => toggleFavourite(item)}
            />
        );
    }
    return <EmptyFavorite />;
};

export default FavoriteListView;
