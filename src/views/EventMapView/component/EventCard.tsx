import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { Icon, IconType } from '@components';
import { EventCardButtons } from './EventCardButtons';
import { LatLng } from 'react-native-maps';
import { typography, colors } from '@styles';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

interface EventDescriptionProps {
    id?: number;
    title: string;
    type?: string;
    location: string;
    eventType?: string;
    date: string;
    timeStart: string;
    timeEnd: string;
    coordinates: LatLng;
    currentItem?: number;
    totalItems?: number;
}

export const EventCard: React.FC<EventDescriptionProps> = props => {
    return (
        <View style={styles.event}>
            <Text style={styles.eventTitle}>{props.title}</Text>
            <Text style={styles.eventLocation}>{props.location}</Text>
            <View>
                <View style={styles.eventiconLabel}>
                    <Icon size={25} type={IconType.Calendar} fill="white" />
                    <Text style={styles.eventLabelText}>{props.date}</Text>
                </View>
                <View style={styles.eventiconLabel}>
                    <Icon size={25} type={IconType.Clock} fill="white" />
                    <Text style={styles.eventLabelText}>{`${props.timeStart} - ${props.timeEnd}`}</Text>
                </View>
            </View>
            <Text
                style={{
                    textAlign: 'right',
                    color: 'white',
                    fontSize: 14,
                    position: 'absolute',
                    bottom: 16,
                    right: 16,
                }}
            >{`${props.currentItem}/${props.totalItems}`}</Text>
            <EventCardButtons />
        </View>
    );
};

const styles = StyleSheet.create({
    eventTitle: {
        fontSize: 20,
        color: 'white',
        fontFamily: typography.normal,
    },
    eventLocation: {
        fontSize: 16,
        color: 'white',
    },
    eventLabelText: {
        fontSize: 16,
        color: 'white',
        marginLeft: 10,
    },
    eventiconLabel: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        marginBottom: 10,
    },
    event: {
        backgroundColor: colors.blue,
        height: height - 440,
        width: width - 50,
        zIndex: 9,
        marginRight: 16,
        paddingHorizontal: 30,
        paddingVertical: 16,
        display: 'flex',
        justifyContent: 'space-between',
    },
});
