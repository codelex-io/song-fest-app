import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Event } from '../EventListView/types';
import { Label } from './Label';
import { colors, fontFamily } from '../../styles';
import { SquareBox } from './SquareBox';


interface CardProps {
    event: Event;
}

export const Card: React.FC<CardProps> = ({ event }) => (
    <View style={styles.container}>
        <View style={styles.column}>
            {event.imageUrl && (
                <View style={styles.imageContainer}>
                    <Image style={styles.image} source={{ uri: event.imageUrl }} resizeMode="cover" />
                </View>
            )}
            <View style={styles.row}>
                <View style={styles.content}>
                    <Text style={styles.title}>{event.title}</Text>
                    <Text style={styles.location}>{event.location}</Text>
                    <View style={styles.bottom}>
                        <Label title={event.date} />
                        <Label title={event.time} />
                    </View>

                    <View style={styles.squareBoxContainer}>
                        <SquareBox />
                    </View>

                </View>
            </View>
        </View>
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    column: {
        flexDirection: 'column',
    },
    row: {
        flexDirection: 'row',
        paddingLeft: 16,
        paddingBottom: 16,
        backgroundColor: colors.green,
        paddingTop: 16,
    },
    imageContainer: {
        height: 180,
    },
    image: {
        width: '100%',
        height: 180,
    },
    content: {
        flex: 1,
    },
    navigate: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingRight: 8,
        paddingLeft: 24,
    },
    title: {
        fontSize: 16,
        lineHeight: 21,
        marginBottom: 12,
        width: '90%',
        color: colors.white,
        fontFamily: fontFamily.normal,

    },
    location: {
        fontSize: 14,
        lineHeight: 18,
        color: colors.white,
        fontFamily: fontFamily.normal,
    },
    bottom: {
        flexDirection: 'column',
        paddingBottom: 5,
        paddingTop: 19,

    },
    squareBoxContainer: {
        flexDirection: 'row',
    },

});
