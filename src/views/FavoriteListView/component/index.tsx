import React from 'react';
import { FlatList, View } from 'react-native';
import { GroupOfFavourites } from '@domain/favourites/types';
import { Card } from './Card';
import { colors } from '@styles';
import NavigationAware from '../../../navigation/NavigationAware';

interface Props extends NavigationAware {
    favourites: GroupOfFavourites[];
}

const FavoriteListView: React.FC<Props> = ({ favourites, navigation }) => {
    return (
        <View style={{ flex: 1, backgroundColor: colors.white }}>
            <FlatList<GroupOfFavourites>
                data={favourites.filter(favourites => favourites.items.length !== 0)}
                keyExtractor={item => item.key}
                renderItem={({ item }): React.ReactElement => (
                    <View style={{ paddingHorizontal: 16 }}>
                        <Card group={item} navigation={navigation} />
                    </View>
                )}
            />
        </View>
    );
};

export default FavoriteListView;
