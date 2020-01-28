import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { NewsItem } from './types';
import { colors } from '../../styles';
import { IconType, Icon } from '@components';

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
                            <TouchableOpacity>
                                <Icon size={24} type={IconType.Share} fill={colors.blue} />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.favoriteIconContainer}>
                            <TouchableOpacity>
                                <Icon size={24} type={IconType.Heart} fill={colors.orange} />
                            </TouchableOpacity>
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
        flexDirection: 'column',
        paddingHorizontal: 16,
    },
    pictureContainer: {
        flex: 1,
        backgroundColor: 'grey',
    },
    picture: {
        height: 180,
    },
    lowerContainer: {
        flex: 1,
        backgroundColor: colors.blue,
        flexDirection: 'column',
        padding: 16,
    },
    icontContainer: {
        flex: 1,
        backgroundColor: colors.blue,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        paddingTop: 16,
    },
    shareIconContainer: {
        height: 44,
        width: 44,
        backgroundColor: colors.white,
        marginRight: 16,
        justifyContent: 'center',
        alignItems: 'center',
    },
    favoriteIconContainer: {
        height: 44,
        width: 44,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.white,
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
