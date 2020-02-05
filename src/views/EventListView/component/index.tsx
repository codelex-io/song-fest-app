import React, { useContext } from 'react';
import { FlatList, View } from 'react-native';
import { colors } from '@styles';
import { Card } from './Card';
import { EventItem } from '../types';
import { Header } from '@components';
import { LocalizationContext } from '../../../localization/LocalizationContext';

const Separator = () => <View style={{ padding: 8 }} />;

interface EventListViewProps {
    loading: boolean;
    events: EventItem[];
}

const EventListView: React.FC<EventListViewProps> = ({ events }) => {
    const { translations } = useContext(LocalizationContext);
    return (
        <View>
            <Header title={translations.EVENTS} />
            <FlatList<EventItem>
                data={events}
                renderItem={({ item, index }): React.ReactElement => (
                    <View style={{ paddingHorizontal: 16 }}>
                        <Card event={item} backgroundColor={colors.findColorByIndex(index)} onPress={() => null} />
                    </View>
                )}
                ItemSeparatorComponent={() => <Separator />}
            />
        </View>
    );
};

export default EventListView;
