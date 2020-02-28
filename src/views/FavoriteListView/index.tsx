import React from 'react';
import { useFavourites } from '@domain/favourites';
import { default as FavoriteListViewComponent } from './component';
import { EmptyFavorite } from './component/EmptyFavorite';
import { useNavigation } from '@react-navigation/native';

const FavoriteListView: React.FC = () => {
    const { favourites, hasAnyItems, toggleFavourite } = useFavourites();
    const navigation = useNavigation();
    if (hasAnyItems()) {
        return (
            <FavoriteListViewComponent
                favourites={favourites}
                onNavigate={item => navigation.navigate('SingleNews', { itemId: item.id })}
                onFavourite={item => toggleFavourite(item)}
            />
        );
    }
    return <EmptyFavorite />;
};

export default FavoriteListView;
