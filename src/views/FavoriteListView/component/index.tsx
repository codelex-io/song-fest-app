import React, { useContext } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { GroupOfFavourites, Favourite } from '@domain/favourites/types';
import { Card } from './Card';
import SimpleLayout from '@components/layouts/SimpleLayout';
import { LocalizationContext } from '@localization/LocalizationContext';
import { statusBarHeight } from '@utils';

interface Props {
    favourites: GroupOfFavourites[];
    onNavigate: (item: Favourite) => void;
    onFavourite: (item: Favourite) => void;
    goBack: () => void;
}

const FavoriteListViewComponent: React.FC<Props> = ({ favourites, onNavigate, onFavourite, goBack }) => {
    const { translations } = useContext(LocalizationContext);
    return (
        <View style={styles.container}>
            <SimpleLayout goBack={goBack} title={translations.getString('FAVORITE')}>
                <FlatList<GroupOfFavourites>
                    style={styles.list}
                    data={favourites.filter(favourites => favourites.items.length !== 0)}
                    keyExtractor={item => item.key}
                    renderItem={({ item }): React.ReactElement => (
                        <Card group={item} onNavigate={onNavigate} onFavourite={onFavourite} />
                    )}
                />
            </SimpleLayout>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: statusBarHeight(),
    },
    list: {
        paddingHorizontal: 16,
        flex: 1,
    },
});

export default FavoriteListViewComponent;
