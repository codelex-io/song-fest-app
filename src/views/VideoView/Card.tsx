import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { VideoData } from './types';
import { typography } from '@styles';
import { Image } from '@components';
import CardTitle from '@components/typography/CardTitle';

interface CardProps {
    item: VideoData;
}

export class Card extends React.Component<CardProps> {
    render() {
        const { item } = this.props;
        return (
            <View style={styles.container}>
                <View style={styles.videoContainer}>
                    <Image height={180} source={{ uri: item.video }} style={styles.image} />
                </View>
                <CardTitle styleProps={{ paddingVertical: 12 }}>{item.title}</CardTitle>
                <View>
                    <Text style={styles.statistics}>{item.statistics}</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
    },
    videoContainer: {
        height: 180,
        marginVertical: 16,
    },
    image: {
        width: '100%',
        height: 180,
    },
    statistics: {
        fontSize: 14,
        fontFamily: typography.medium,
    },
});
