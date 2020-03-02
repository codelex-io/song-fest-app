import React from 'react';
import { useFavourites } from '@domain/favourites';
import { default as FavoriteListViewComponent } from './component';
import { EmptyFavorite } from './component/EmptyFavorite';
import { NewsStackNavParams } from 'src/navigation/stacks/NewsStack';

const FavoriteListView: React.FC<NewsStackNavParams<'Favorites'>> = ({ navigation }) => {
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
