import React, { useContext } from 'react';
import { FlatList, View, StyleSheet, RefreshControl, StatusBar } from 'react-native';
import { colors } from '@styles';
import { TimeSelector } from '@domain';
import { Card } from './Card';
import { EventItem } from '../types';
import { LongSearch, Loading, Header } from '@components';
import { LocalizationContext } from '../../../localization/LocalizationContext';
import { StackNavigationProp } from '@react-navigation/stack';
import { SharedStackParamsList } from 'src/navigation/stacks/SharedStack';
import Filters from './Filters';

interface Props {
    loading: boolean;
    items: EventItem[];
    onReadMore: (item: EventItem) => void;
    onFavourite: (item: EventItem) => void;
    onNavigate: (item: EventItem) => void;
    activeKey: TimeSelector;
    onPress: (key: TimeSelector) => void;
    onSearch: () => void;
    searchInput: string;
    onResetSearch: () => void;
    onShare: (item: EventItem) => void;
    onRefresh: () => void;
    refreshing: () => boolean;
    navigation: StackNavigationProp<
        SharedStackParamsList,
        'Feed' | 'Favorites' | 'Article' | 'Search' | 'UserCategory'
    >;
}

const EventListComponent: React.FC<Props> = ({
    loading,
    items,
    onFavourite,
    onNavigate,
    activeKey,
    onPress,
    onSearch,
    searchInput,
    onResetSearch,
    onReadMore,
    onShare,
    onRefresh,
    navigation,
}) => {
    const { translations } = useContext(LocalizationContext);
    if (loading) {
        return <Loading />;
    }
    return (
        <View style={styles.viewContainer}>
            <View>
                <StatusBar />
                <Header title={translations.getString('EVENTS')} navigation={navigation} />
                <LongSearch
                    backgroundColor={colors.blue}
                    onPress={onSearch}
                    searchInput={searchInput}
                    onResetSearch={onResetSearch}
                    customStyles={styles.longSearch}
                />
                <Filters activeKey={activeKey} onPress={onPress} />
            </View>

            <FlatList<EventItem>
                refreshControl={
                    <RefreshControl
                        onRefresh={onRefresh}
                        refreshing={loading}
                        colors={[colors.randomColor()]}
                        tintColor={colors.randomColor()}
                    />
                }
                data={items}
                renderItem={({ item, index }): React.ReactElement => (
                    <Card
                        item={item}
                        backgroundColor={colors.findColorByIndex(index)}
                        onFavourite={() => onFavourite(item)}
                        onNavigate={() => onNavigate(item)}
                        onReadMore={() => onReadMore(item)}
                        onShare={() => onShare(item)}
                    />
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    viewContainer: {
        flex: 1,
        backgroundColor: colors.white,
    },
    longSearch: {
        marginHorizontal: 16,
        marginTop: 8,
        marginBottom: 16,
    },
});

export default EventListComponent;
