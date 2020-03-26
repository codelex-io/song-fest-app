import React, { useContext } from 'react';
import { useFavourites } from '@domain/favourites';
import FavoriteListViewComponent from './component';
import { View, StyleSheet, Text } from 'react-native';
import { SimpleHeader, Icon, IconType } from '@components';
import { LocalizationContext } from '@localization/LocalizationContext';
import StatusBar from '@components/headers/StatusBar';
import { SharedStackNavList } from 'src/navigation/stacks/SharedStack';
import { colors } from '@styles';

const FavoriteListView: React.FC<SharedStackNavList<'Favorites'>> = ({ navigation }) => {
    const { favourites, hasAnyItems, toggleFavourite } = useFavourites();
    const { translations } = useContext(LocalizationContext);

    return (
        <View style={hasAnyItems() ? styles.container : styles.EmptyContainer}>
            <View style={hasAnyItems() ? styles.header : styles.EmptyHeader}>
                <StatusBar />
                <SimpleHeader title={translations.getString('FAVORITE')} onBack={() => navigation.goBack()} />
            </View>

            {hasAnyItems() ? (
                <FavoriteListViewComponent
                    favourites={favourites}
                    onNavigate={item => navigation.navigate('Article', { itemId: item.id, group: item.group })}
                    onFavourite={item => toggleFavourite(item)}
                />
            ) : (
                <View style={styles.contentContainer}>
                    <Icon style={styles.icon} size={44} type={IconType.HeartFilled} fill={colors.orange} />
                    <Text style={styles.title}>{translations.getString('FAVORITES_HERE')}</Text>
                    <Text style={styles.title2}>{translations.getString('FAVORITE_INFO')}</Text>
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        width: '100%',
    },
    EmptyContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    EmptyHeader: {
        position: 'absolute',
        top: 0,
        left: 0,
    },
    contentContainer: {
        marginHorizontal: 16,
        alignItems: 'center',
    },
    icon: {
        marginBottom: 24,
    },
    title: {
        fontSize: 20,
        textAlign: 'center',
        lineHeight: 26,
        marginBottom: 12,
    },
    title2: {
        fontSize: 16,
        textAlign: 'center',
        paddingHorizontal: 24,
        lineHeight: 21,
    },
});
export default FavoriteListView;
