import React from 'react';
import { FlatList, View } from 'react-native';
import { GroupOfFavourites } from '@domain/favourites/types';
import { Card } from './Card';

interface Props {
    favourites: GroupOfFavourites[];
}

const FavoriteListView: React.FC<Props> = ({ favourites }) => (
    <FlatList<GroupOfFavourites>
        data={favourites}
        keyExtractor={item => item.key}
        renderItem={({ item }): React.ReactElement => (
            <View>
                <Card group={item} />
            </View>
        )}
    />
);

export default FavoriteListView;
