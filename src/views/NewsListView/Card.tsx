import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { NewsItem } from './types';
import { colors } from '../../styles';

interface CardProps {
    item: NewsItem;
}

export class Card extends React.Component<CardProps> {
    render() {
        const { item } = this.props;
        return (
            <View style={styles.container}>
                <View style={styles.pictureContainer}>
                    <Image style={styles.picture} source={{ uri: item.imageURL }} resizeMode="cover" />
                </View>
                <View style={styles.lowerContainer}>
                    <Text style={styles.dateText}> {item.date}</Text>
                    <Text style={styles.titleText}> {item.title}</Text>
                    <View style={styles.icontContainer}>
                        <View style={styles.shareIconContainer}>
                            <TouchableOpacity></TouchableOpacity>
                        </View>
                        <View style={styles.favoriteIconContainer}>
                            <TouchableOpacity></TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderRadius: 8,
        flexDirection: 'column',
        paddingHorizontal: 16,
    },
    pictureContainer: {
        flex: 1,
        backgroundColor: 'grey',
        borderTopRightRadius: 8,
        borderTopLeftRadius: 8,
    },
    picture: {
        height: 180,
        borderTopRightRadius: 8,
        borderTopLeftRadius: 8,
    },
    lowerContainer: {
        flex: 1,
        borderBottomRightRadius: 8,
        borderBottomLeftRadius: 8,
        backgroundColor: colors.blue,
        flexDirection: 'column',
        padding: 16,
    },
    icontContainer: {
        flex: 1,
        borderBottomRightRadius: 8,
        borderBottomLeftRadius: 8,
        backgroundColor: colors.blue,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        paddingTop: 16,
    },
    shareIconContainer: {
        height: 44,
        width: 44,
        backgroundColor: colors.orange,
        borderRadius: 8,
        opacity: 0.15,
        marginRight: 16,
    },
    favoriteIconContainer: {
        height: 44,
        width: 44,
        backgroundColor: colors.orange,
        borderRadius: 8,
        opacity: 0.15,
    },
    dateText: {
        color: colors.white,
        fontWeight: '500',
        fontSize: 14,
        marginBottom: 8,
    },
    titleText: {
        color: colors.white,
        fontWeight: '500',
        fontSize: 16,
    },
});
