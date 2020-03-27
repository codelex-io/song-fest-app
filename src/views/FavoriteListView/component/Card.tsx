import React, { useContext, ReactNode } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { colors, typography } from '@styles';
import { IconType } from '@components';
import { GroupOfFavourites, Favourite, FavouriteEvent } from '@domain/favourites/types';
import { LocalizationContext } from '@localization/LocalizationContext';
import ListEntry from './ListEntry';
import { Label } from '@components/typography/Label';

interface CardProps {
    group: GroupOfFavourites;
    onNavigate: (item: Favourite) => void;
    onFavourite: (item: Favourite) => void;
}

export const Card: React.FC<CardProps> = ({ group, onNavigate, onFavourite }) => {
    const { translations } = useContext(LocalizationContext);

    const renderEventInformation = (event: FavouriteEvent): ReactNode => {
        return event.group === 'EVENTS' ? (
            <View style={styles.labelContainer}>
                <Label iconType={IconType.Calendar} title={event.date} />
                <Label iconType={IconType.Clock} title={event.time} />
            </View>
        ) : null;
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}> {translations.getString(group.key)}</Text>
            {group.items.map((item: Favourite) => {
                return (
                    <ListEntry
                        key={item.id}
                        item={item}
                        onFavourite={() => onFavourite(item)}
                        onNavigate={() => onNavigate(item)}
                    >
                        {renderEventInformation(item as FavouriteEvent)}
                    </ListEntry>
                );
            })}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 20,
    },
    title: {
        color: colors.mediumGrey4D,
        fontFamily: typography.medium,
        fontSize: 14,
        paddingTop: 4,
        marginBottom: 12,
        lineHeight: 18,
    },
    labelContainer: {
        flexDirection: 'row',
        marginTop: 9,
        marginLeft: 24 + 12,
    },
});
