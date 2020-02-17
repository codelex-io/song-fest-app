import React from 'react';
import { View, StyleSheet, FlatList, TouchableHighlight } from 'react-native';
import { colors } from '@styles';
import { LongSearch, TimeFilterButton, FilterButtonIcon } from '@components';
import { VideoData } from './types';
import { Card } from './Card';

interface VideoViewProps {
    items: VideoData[];
}

export const VideoView: React.FC<VideoViewProps> = ({ items }) => {
    return (
        <View style={styles.container}>
            <LongSearch backgroundColor={colors.orange} />
            <View style={styles.searchContainerButton}>
                <TimeFilterButton button={{ title: 'tiešsaitē', active: false }} />
                <TimeFilterButton button={{ title: 'pēdējie', active: false }} />
                <TimeFilterButton button={{ title: 'populārakie', active: true }} />
            </View>
            <FlatList<VideoData>
                data={items}
                renderItem={({ item }): React.ReactElement => (
                    <View style={{ paddingHorizontal: 16 }}>
                        <Card item={item} />
                    </View>
                )}
                ItemSeparatorComponent={() => <View style={{ height: 16 }}></View>}
            />

            <View style={styles.fixedFilter}>
                <TouchableHighlight>
                    <FilterButtonIcon />
                </TouchableHighlight>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
    },
    searchContainerButton: {
        flexDirection: 'row',
        marginBottom: 16,
        marginTop: 8,
        flexWrap: 'wrap',
        paddingHorizontal: 16,
    },
    fixedFilter: {
        position: 'absolute',
        bottom: 0,
        width: '25%',
        marginBottom: 16,
        alignSelf: 'center',
        backgroundColor: colors.yellow,
    },
});
