import React from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { Icon, IconType } from '@components';
import { EventItem } from '../types';
import { IconButtons } from './IconButtons';
import { dateTimeUtils } from '@utils';
import { colors, typography } from '@styles';

const width = Dimensions.get('window').width;

interface EventDescriptionProps {
    item: EventItem;
    onFavourite: () => void;
    onNavigate: () => void;
    itemIndex: number;
    totalItems: number;
    backgroundColor: string;
    onReadMore: () => void
}

export const EventCard: React.FC<EventDescriptionProps> = ({
    item,
    onNavigate,
    backgroundColor,
    onFavourite,
    itemIndex,
    totalItems,
    onReadMore
}) => {
    return (
        <View style={[styles.event, { backgroundColor }]}>
            <TouchableOpacity onPress={onReadMore} >
                <Text style={styles.eventTitle}>{item.title}</Text>
                <Text style={styles.eventLocation}>{item.locationTitle}</Text>
                <View>
                    <View style={styles.eventiconLabel}>
                        <Icon size={25} type={IconType.Calendar} fill="white" />
                        <Text style={styles.eventLabelText}>{dateTimeUtils.formatDate(item.date)}</Text>
                    </View>
                    <View style={styles.eventiconLabel}>
                        <Icon size={25} type={IconType.Clock} fill="white" />
                        <Text style={styles.eventLabelText}>{item.time}</Text>
                    </View>
                </View>
                <Text style={styles.items}>{`${itemIndex}/${totalItems}`}</Text>
                <View style={styles.row}>
                    <IconButtons
                        onShare={() => null}
                        isFavourite={item.isFavourite}
                        onFavourite={onFavourite}
                        onNavigate={onNavigate}
                    />
                </View>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    eventTitle: {
        fontSize: 20,
        color: colors.white,
        fontWeight: 'bold',
    },
    row: {
        flexDirection: 'row',
    },
    eventLocation: {
        fontSize: 16,
        color: colors.white,
    },
    eventLabelText: {
        fontSize: 16,
        color: colors.white,
        marginLeft: 10,
        fontFamily: typography.normal,
    },
    eventiconLabel: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        marginBottom: 10,
    },
    event: {
        width: width - 50,
        height: 280,
        zIndex: 9,
        marginRight: 16,
        paddingHorizontal: 24,
        paddingVertical: 16,
        display: 'flex',
        justifyContent: 'space-between',
    },
    items: {
        textAlign: 'right',
        color: 'white',
        fontSize: 14,
        position: 'absolute',
        bottom: 16,
        right: 16,
    },
});
