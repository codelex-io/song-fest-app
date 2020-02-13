import React from 'react';
import { FlatList, View } from 'react-native';
import { GroupOfFavourites } from '@domain/favourites/types';
import { Card } from './Card';
import { colors } from '@styles';

interface Props {
    favourites: GroupOfFavourites[];
}

const FavoriteListView: React.FC<Props> = ({ favourites }) => {
    return (
        <View style={{ flex: 1, backgroundColor: colors.white }}>
            <FlatList<GroupOfFavourites>
                data={favourites.filter(favourites => favourites.items.length !== 0)}
                keyExtractor={item => item.key}
                renderItem={({ item }): React.ReactElement => (
                    <View>
                        <Card group={item} />
                    </View>
                )}
            />
        </View>
    );
};

export default FavoriteListView;
