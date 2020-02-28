import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { VideoData } from './types';
import { typography } from '@styles';

interface CardProps {
    item: VideoData;
}

export class Card extends React.Component<CardProps> {
    render() {
        const { item } = this.props;
        return (
            <View style={styles.container}>
                <View style={styles.videoContainer}>
                    <Image style={styles.video} source={{ uri: item.video }} resizeMode="cover" />
                </View>
                <View>
                    <Text style={styles.title}>{item.title}</Text>
                </View>
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
    video: {
        width: '100%',
        height: 180,
    },
    title: {
        fontSize: 16,
        fontFamily: typography.bold,
        paddingVertical: 12,
    },
    statistics: {
        fontSize: 14,
        fontFamily: typography.normal,
    },
});
