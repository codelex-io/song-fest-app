import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import MarkdownEvent from './component/index';
import { FETCH_TARGET_NEWS_ITEM, FETCH_TARGET_EVENTS_ITEM } from './graphql/queries';
import { Data, NewsItem as GraphQLNewsItem, Variables } from './graphql/types';
import { NewsItem } from './types';
import { useFavourites } from '@domain/favourites';
import { Favourite } from '@domain/favourites/types';
import { open } from '@domain/share';
import { Loading } from '@components';
import { View } from 'react-native';
import { colors } from '@styles';
import { NewsStackNavParams } from 'src/navigation/stacks/NewsStack';

const toItem = (item: GraphQLNewsItem, isFavourite: (fav: Favourite) => boolean): NewsItem => {
    return { ...item, isFavourite: isFavourite({ id: item.id, title: item.title, group: 'NEWS' }) };
};

const SingleView: React.FC<NewsStackNavParams<'Article'>> = ({ route }) => {
    const { params: { itemId, group } } = route

    const query = group === 'NEWS' ? FETCH_TARGET_NEWS_ITEM : FETCH_TARGET_EVENTS_ITEM;
    const { loading, data } = useQuery<Data, Variables>(query, { variables: { id: itemId } });
    const { toggleFavourite, isFavourite } = useFavourites();

    if (loading || !data) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', backgroundColor: colors.white }}>
                <Loading />
            </View>
        );
    }

    const item = toItem(data.item, isFavourite);

    return (
        <MarkdownEvent
            loading={loading}
            item={item}
            onFavourite={item => toggleFavourite({ id: item.id, title: item.title, group: group })}
            onShare={item => open(item.link)}
        />
    );
};

export default SingleView;
