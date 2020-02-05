import React, { useContext } from 'react';
import { View, StyleSheet, FlatList, TouchableHighlight } from 'react-native';
import { colors } from '@styles';
import { Header, LongSearch, TimeFilterButton, FilterButtonIcon } from '@components';
import { VideoData } from './types';
import { Card } from './Card';
import { LocalizationContext } from './../../localization/LocalizationContext';

interface VideoViewProps {
    items: VideoData[];
}

export const VideoView: React.FC<VideoViewProps> = ({ items }) => {
    const { translations } = useContext(LocalizationContext);
    return (
        <View style={styles.container}>
            <Header title={translations.VIDEO} />
            <LongSearch backgroundColor={colors.orange} />
            <View style={styles.searchContainerButton}>
                <TimeFilterButton button={{ title: 'tiešsaitē', active: false }} />
                <TimeFilterButton button={{ title: 'pēdējie', active: false }} />
                <TimeFilterButton button={{ title: 'populārakie', active: true }} />
            </View>
            <FlatList<VideoData>
                data={items}
                renderItem={({ item }): React.ReactElement => (
                    <View>
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
        paddingHorizontal: 16,
        justifyContent: 'flex-start',
    },
    searchContainerButton: {
        flexDirection: 'row',
        marginBottom: 16,
        marginTop: 8,
        marginLeft: 16,
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
