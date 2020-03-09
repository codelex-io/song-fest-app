import React, { useContext } from 'react';
import { FlatList, View, StyleSheet, RefreshControl } from 'react-native';
import { colors } from '@styles';
import { TimeSelector } from '@domain';
import { Card } from './Card';
import { EventItem } from '../types';
import { LongSearch, Loading } from '@components';
import { TextToggleBtn } from '@components/buttons';
import { LocalizationContext } from '../../../localization/LocalizationContext';

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
}) => {
    const { translations } = useContext(LocalizationContext);
    if (loading) {
        return <Loading />;
    }
    return (
        <View style={styles.viewContainer}>
            <LongSearch
                backgroundColor={colors.blue}
                onPress={onSearch}
                searchInput={searchInput}
                onResetSearch={onResetSearch}
                customStyles={styles.longSearch}
            />
            <View style={styles.searchContainerButton}>
                <TextToggleBtn
                    title={translations.getString('TODAY')}
                    active={activeKey === 'today'}
                    onPress={() => onPress('today')}
                    primaryColor={colors.white}
                    secondaryColor={colors.green}
                />
                <TextToggleBtn
                    title={translations.getString('TOMORROW')}
                    active={activeKey === 'tomorrow'}
                    onPress={() => onPress('tomorrow')}
                    primaryColor={colors.white}
                    secondaryColor={colors.green}
                />
                <TextToggleBtn
                    title={translations.getString('THIS_WEEK')}
                    active={activeKey === 'this-week'}
                    onPress={() => onPress('this-week')}
                    primaryColor={colors.white}
                    secondaryColor={colors.green}
                />
                <TextToggleBtn
                    title={translations.getString('OTHERS')}
                    active={activeKey === 'all'}
                    onPress={() => onPress('all')}
                    primaryColor={colors.white}
                    secondaryColor={colors.green}
                />
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
    searchContainerButton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 16,
        paddingBottom: 8,
    },
});

export default EventListComponent;
