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
}) => {
    if (loading) {
        return <Loading />;
    }
    return (
        <View>
            <LongSearch
                backgroundColor={colors.blue}
                onPress={onSearch}
                searchInput={searchInput}
                onResetSearch={onResetSearch}
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
                style={styles.listContainer}
                data={items}
                renderItem={({ item, index }): React.ReactElement => (
                    <View style={{ paddingHorizontal: 16 }}>
                        <Card
                            item={item}
                            backgroundColor={colors.findColorByIndex(index)}
                            onFavourite={() => onFavourite(item)}
                            onNavigate={() => onNavigate(item)}
                            onReadMore={() => onReadMore(item)}
                        />
                    </View>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    viewContainer: {
        flex: 1,
    },
    searchContainerButton: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingHorizontal: 16,
    },
    listContainer: {
        flex: 1,
        paddingHorizontal: 16,
    },
});

export default EventListComponent;
