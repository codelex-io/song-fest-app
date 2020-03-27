import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Icon, IconType } from '@components';
import { EventItem } from '../types';
import { IconButtons } from './IconButtons';
import { dateTimeUtils } from '@utils';
import { colors, typography } from '@styles';
import { AnyType } from '@domain/AnyType';
import CardTitle from '@components/typography/CardTitle';

interface EventDescriptionProps {
    item: EventItem;
    onFavourite: () => void;
    onNavigate: () => void;
    itemIndex: number;
    totalItems: number;
    backgroundColor: string;
    navigateToArticle: () => void;
}

export const EventCard = ({
    item,
    onNavigate,
    backgroundColor,
    onFavourite,
    itemIndex,
    totalItems,
    navigateToArticle,
}: EventDescriptionProps) => {
    return (
        <View style={[styles.slide]}>
            <View style={[styles.slideInnerContainer, { backgroundColor }]}>
                <TouchableOpacity onPress={navigateToArticle}>
                    <CardTitle styleProps={{ marginBottom: 12 }} numberOfLines={3} ellipsizeMode="tail">
                        {item.title}
                    </CardTitle>

                    <Text style={styles.eventLocation} numberOfLines={2} ellipsizeMode="tail">
                        {item.locationTitle}
                    </Text>

                    <View style={[styles.eventiconLabel, { marginRight: 16 }]}>
                        <Icon size={25} type={IconType.Calendar} fill="white" />
                        <Text style={styles.eventLabelText}>{dateTimeUtils.formatDateDay(item.date as AnyType)}</Text>
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
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
    },
    eventLocation: {
        fontFamily: typography.regular,
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
        fontFamily: typography.medium,
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
