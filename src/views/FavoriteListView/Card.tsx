import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { FavouriteGroup } from './types';
import { Icon } from '../../components';

interface CardProps {
    group: FavouriteGroup;
}

export class Card extends React.Component<CardProps> {
    render() {
        const { group } = this.props;
        return (
            <View style={styles.container}>
                <Text style={styles.title}> {group.title}</Text>
                {group.items.map(item =>
                    (<View key={item.id} style={styles.itemContainer}>
                        <TouchableOpacity style={styles.favoriteIcon}>
                            <Icon size={24} />
                        </TouchableOpacity>
                        <Text style={styles.itemText}>{item.title}</Text>
                        <TouchableOpacity style={styles.rightIcon}>
                            <Icon size={24} />
                        </TouchableOpacity>
                    </View>))}
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
    itemContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',

    },
    favoriteIcon: {
        paddingLeft: 2,
    },
    rightIcon: {
        paddingRight: 8,
    },
    title: {
        color: '#4D4D4D',
        fontSize: 14,
        paddingLeft: 16,
        paddingTop: 24,
        paddingBottom: 12,
        marginLeft: 14,
        marginRight: 24.59,
    },
    itemText: {
        color: '#1A1A1A',
        fontSize: 16,
        paddingTop: 16,
        textAlign: 'left',
        marginRight: 14,
    },


});
