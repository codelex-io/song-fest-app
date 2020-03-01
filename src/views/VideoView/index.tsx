import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { colors } from '@styles';
import { LongSearch, TimeFilterButton } from '@components';
import { VideoData } from './types';
import { Card } from './Card';
import { useNavigation } from '@react-navigation/native';

const ITEMS = [
    {
        id: '1',
        video: 'https://via.placeholder.com/360x184?text=Placeholder',
        title: '„Augstāk par zemi” un finālkonkurss',
        statistics: 'Skatījumi: 4 349, ievietots 5. maijā',
    },
    {
        id: '2',
        video: 'https://via.placeholder.com/360x184?text=Placeholder',
        title: 'XII Latvijas Skolu jaunatnes dziesmu un deju svētku ieskaņas pasākums Kuldīgas novadā',
        statistics: 'Skatījumi: 4 349, ievietots 5. maijā',
    },
];

export const VideoView: React.FC = () => {
    const navigation = useNavigation();
    const items = ITEMS;
    return (
        <View style={styles.container}>
            <LongSearch
                backgroundColor={colors.orange}
                onPress={() => navigation.navigate('Search', { group: 'VIDEO' })}
            />
            <View style={styles.searchContainerButton}>
                <TimeFilterButton title="tiešsaitē" active={true} onPress={() => null} />
                <TimeFilterButton title="pēdējie" active={false} onPress={() => null} />
                <TimeFilterButton title="populārakie" active={false} onPress={() => null} />
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
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        backgroundColor: colors.white,
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
