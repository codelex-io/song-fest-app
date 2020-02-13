import React from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import { colors } from '@styles';
import { Card } from './Card';
import { EventItem } from '../types';
import { LongSearch, TimeFilterButton } from '@components';

const Separator = () => <View style={{ padding: 8 }} />;

interface Props {
    loading: boolean;
    items: EventItem[];
    onFavourite: (item: EventItem) => void;
    onNavigate: (item: EventItem) => void;
}

const EventListView: React.FC<Props> = ({ items, onFavourite, onNavigate }) => {
    return (
        <View style={styles.container}>
            <LongSearch backgroundColor={colors.blue} />
            <View style={styles.searchContainerButton}>
                <TimeFilterButton button={{ title: 'ŠODIEN', active: false }} />
                <TimeFilterButton button={{ title: 'rīt', active: false }} />
                <TimeFilterButton button={{ title: 'šonedēļ', active: true }} />
                <TimeFilterButton button={{ title: 'cits', active: false }} />
            </View>
            <FlatList<EventItem>
                data={items}
                renderItem={({ item, index }): React.ReactElement => (
                    <View>
                        <Card
                            item={item}
                            backgroundColor={colors.findColorByIndex(index)}
                            onFavourite={() => onFavourite(item)}
                            onNavigate={() => onNavigate(item)}
                        />
                    </View>
                )}
                ItemSeparatorComponent={() => <Separator />}
            />
        </View>
    );
};

export default EventListView;

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 16,
    },
    searchContainerButton: {
        flexDirection: 'row',
        marginBottom: 16,
        marginTop: 8,
    },
});
