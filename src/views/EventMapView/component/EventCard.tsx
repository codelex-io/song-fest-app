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

                    <View style={[styles.eventiconLabel, { marginRight: 16 }]}>
                        <Icon size={25} type={IconType.Calendar} fill="white" />
                        <Text style={styles.eventLabelText}>
                            {/*eslint-disable*/}
                            {dateTimeUtils.formatDateDay(item.date as any)}
                            {/*eslint-enable*/}
                        </Text>
                    </View>
                    <View style={[styles.eventiconLabel, { marginBottom: 12 }]}>
                        <Icon size={25} type={IconType.Clock} fill="white" />
                        <Text style={styles.eventLabelText}>{item.time}</Text>
                    </View>

                    <View style={styles.row}>
                        <IconButtons
                            onShare={() => null}
                            isFavourite={item.isFavourite}
                            onFavourite={onFavourite}
                            onNavigate={onNavigate}
                        />
                        <Text style={styles.items}>{`${itemIndex}/${totalItems}`}</Text>
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
        fontSize: 16,
        lineHeight: 21,
        color: colors.white,
        fontFamily: typography.bold,
        marginBottom: 12,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
    },
    eventLocation: {
        fontFamily: typography.normal,
        fontSize: 14,
        lineHeight: 18,
        color: colors.white,
        marginBottom: 12,
    },
    eventLabelText: {
        fontSize: 14,
        lineHeight: 18,
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
        color: colors.white,
        fontFamily: typography.bold,
        fontSize: 14,
        lineHeight: 18,
    },
});
