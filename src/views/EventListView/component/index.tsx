import React from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import { colors } from '@styles';
import { TimeSelector } from '@domain';
import { Card } from './Card';
import { EventItem } from '../types';
import { LongSearch, Loading } from '@components';
import { TextToggleBtn } from '@components/buttons';

const Separator = () => <View style={{ padding: 8 }} />;

interface Props {
    loading: boolean;
    items: EventItem[];
    onFavourite: (item: EventItem) => void;
    onNavigate: (item: EventItem) => void;
    activeKey: TimeSelector;
    onPress: (key: TimeSelector) => void;
}

const EventListComponent: React.FC<Props> = ({ loading, items, onFavourite, onNavigate, activeKey, onPress }) => {
    if (loading) {
        return <Loading />;
    }
    return (
        <View>
            <LongSearch backgroundColor={colors.blue} />
            <View style={styles.searchContainerButton}>
                <TextToggleBtn
                    title="šodien"
                    active={activeKey === 'today'}
                    onPress={() => onPress('today')}
                    primaryColor={colors.white}
                    secondaryColor={colors.orange}
                />
                <TextToggleBtn
                    title="rīt"
                    active={activeKey === 'tomorrow'}
                    onPress={() => onPress('tomorrow')}
                    primaryColor={colors.white}
                    secondaryColor={colors.orange}
                />
                <TextToggleBtn
                    title="šonedēļ"
                    active={activeKey === 'this-week'}
                    onPress={() => onPress('this-week')}
                    primaryColor={colors.white}
                    secondaryColor={colors.orange}
                />
                <TextToggleBtn
                    title="cits"
                    active={activeKey === 'all'}
                    onPress={() => onPress('all')}
                    primaryColor={colors.white}
                    secondaryColor={colors.orange}
                />
            </View>
            <FlatList<EventItem>
                data={items}
                renderItem={({ item, index }): React.ReactElement => (
                    <View style={{ paddingHorizontal: 16 }}>
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

const styles = StyleSheet.create({
    searchContainerButton: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingHorizontal: 16,
    },
});

export default EventListComponent;
