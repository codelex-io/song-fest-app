import React from 'react';
import { FavouriteGroup } from './types';
import { FlatList, View } from 'react-native';
import { Card } from './Card';

interface FavouriteGroupProps {
    groups: FavouriteGroup[];
}

export default class FavoriteListView extends React.Component<FavouriteGroupProps> {
    render() {
        const { groups } = this.props;
        return (
            <FlatList<FavouriteGroup>
                data={groups}
                keyExtractor={item => item.title}
                renderItem={({ item }): React.ReactElement => (
                    <View>
                        <Card group={item} />
                    </View>
                )}
            />
        );
    }
}
