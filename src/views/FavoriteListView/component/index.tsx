import React from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import { GroupOfFavourites, Favourite } from '@domain/favourites/types';
import { Card } from './Card';
import { colors } from '@styles';
import NavigationAware from '../../../navigation/NavigationAware';

interface Props extends NavigationAware {
    favourites: GroupOfFavourites[];
    onFavourite: (item: Favourite) => void;
}

const FavoriteListView: React.FC<Props> = ({ favourites, navigation, onFavourite }) => {
    return (
        <View style={styles.container}>
            <FlatList<GroupOfFavourites>
                data={favourites.filter(favourites => favourites.items.length !== 0)}
                keyExtractor={item => item.key}
                renderItem={({ item }): React.ReactElement => (
                    <View style={{ paddingHorizontal: 16 }}>
                        <Card group={item} navigation={navigation} onFavourite={onFavourite} />
                    </View>
                )}
            />
        </View>
    );
};

export default FavoriteListView;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
    },
});
