import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Icon, IconType } from '@components';
import { EventItem } from '../types';
import { IconButtons } from './IconButtons';
import { dateTimeUtils } from '@utils';
import { colors, typography } from '@styles';

interface EventDescriptionProps {
    item: EventItem;
    onFavourite: () => void;
    onNavigate: () => void;
    itemIndex: number;
    totalItems: number;
    backgroundColor: string;
    onReadMore: () => void;
}

export const EventCard = ({
    item,
    onNavigate,
    backgroundColor,
    onFavourite,
    itemIndex,
    totalItems,
    onReadMore,
}: EventDescriptionProps) => {
    return (
        <View style={[styles.slide]}>
            <View style={[styles.slideInnerContainer, { backgroundColor }]}>
                <TouchableOpacity onPress={onReadMore}>
                    <Text style={styles.eventTitle} numberOfLines={3} ellipsizeMode="tail">
                        {item.title}
                    </Text>
                    <Text style={styles.eventLocation} numberOfLines={2} ellipsizeMode="tail">
                        {item.locationTitle}
                    </Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start' }}>
                        <View style={[styles.eventiconLabel, { marginRight: 16 }]}>
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
        </View>
    );
};

const styles = StyleSheet.create({
    slide: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignSelf: 'center',
        width: '100%',
        paddingHorizontal: 4,
    },
    slideInnerContainer: {
        paddingVertical: 16,
        paddingHorizontal: 16,
        flex: 1,
    },
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
        alignItems: 'center',
        marginBottom: 10,
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
