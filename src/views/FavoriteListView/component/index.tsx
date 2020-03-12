import React from 'react';
import { FlatList, View } from 'react-native';
import { GroupOfFavourites, Favourite } from '@domain/favourites/types';
import { Card } from './Card';

interface Props {
    favourites: GroupOfFavourites[];
    onNavigate: (item: Favourite) => void;
    onFavourite: (item: Favourite) => void;
}

const FavoriteListViewComponent: React.FC<Props> = ({ favourites, onNavigate, onFavourite }) => {
    return (
        <FlatList<GroupOfFavourites>
            data={favourites.filter(favourites => favourites.items.length !== 0)}
            keyExtractor={item => item.key}
            renderItem={({ item }): React.ReactElement => (
                <View style={{ paddingHorizontal: 16 }}>
                    <Card group={item} onNavigate={onNavigate} onFavourite={onFavourite} />
                </View>
            )}
        />
    );
};

export default FavoriteListViewComponent;
