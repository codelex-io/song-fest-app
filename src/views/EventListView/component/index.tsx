import React from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import { colors } from '@styles';
import { TimeSelector } from '@domain';
import { Card } from './Card';
import { EventItem } from '../types';
import { LongSearch, Loading } from '@components';
import { TextToggleBtn } from '@components/buttons';

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
}) => {
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
                styles={styles.longSearch}
            />
            <View style={styles.searchContainerButton}>
                <TextToggleBtn
                    title="šodien"
                    active={activeKey === 'today'}
                    onPress={() => onPress('today')}
                    primaryColor={colors.white}
                    secondaryColor={colors.green}
                />
                <TextToggleBtn
                    title="rīt"
                    active={activeKey === 'tomorrow'}
                    onPress={() => onPress('tomorrow')}
                    primaryColor={colors.white}
                    secondaryColor={colors.green}
                />
                <TextToggleBtn
                    title="šonedēļ"
                    active={activeKey === 'this-week'}
                    onPress={() => onPress('this-week')}
                    primaryColor={colors.white}
                    secondaryColor={colors.green}
                />
                <TextToggleBtn
                    title="cits"
                    active={activeKey === 'all'}
                    onPress={() => onPress('all')}
                    primaryColor={colors.white}
                    secondaryColor={colors.green}
                />
            </View>
            <FlatList<EventItem>
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
    },
    longSearch: {
        marginHorizontal: 16,
        marginTop: 8,
        marginBottom: 16,
    },
    searchContainerButton: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginHorizontal: 16,
        paddingBottom: 8,
    },
});

export default EventListComponent;
