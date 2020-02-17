import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { colors } from '@styles';
import { dateTimeUtils } from '@utils';
import { NewsItem } from '../types';
import { IconButtons } from './IconButtons';
import NavigationAware from '../../../navigation/NavigationAware';

interface CardProps extends NavigationAware {
    item: NewsItem;
    newsItemId: string;
    backgroundColor: string;
    onFavourite: () => void;
    onShare: () => void;
}

const Card: React.FC<CardProps> = ({ item, backgroundColor, onFavourite, onShare, navigation, newsItemId }) => {
    return (
        <TouchableOpacity onPress={() => {
            navigation.navigate('SingleNews', { newsItemId: newsItemId });
        }}>
            <View style={styles.container}>
                {item.image?.url && (
                    <View style={styles.pictureContainer}>
                        <Image style={styles.picture} source={{ uri: item.image?.url }} resizeMode="cover" />
                    </View>
                )}
                <View style={[styles.lowerContainer, { backgroundColor }]}>
                    <Text style={styles.dateText}> {dateTimeUtils.formatDate(item.date)}</Text>
                    <Text style={styles.titleText}> {item.title}</Text>
                    <View style={styles.row}>
                        <IconButtons onShare={onShare} isFavourite={item.isFavourite} onFavourite={onFavourite} />
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
};

export default Card;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
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
        backgroundColor: colors.orange,
        opacity: 0.15,
        marginRight: 16,
        justifyContent: 'center',
        alignItems: 'center',
    },
    favoriteIconContainer: {
        height: 44,
        width: 44,
        backgroundColor: colors.orange,
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
    row: {
        flexDirection: 'row',
    },
});
