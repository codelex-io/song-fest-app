import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { colors } from '@styles';
import { LongSearch } from '@components';
import { VideoData } from './types';
import { Card } from './Card';
import { TextToggleBtn } from '@components/buttons';

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
    const items = ITEMS;
    return (
        <View style={styles.container}>
            <LongSearch backgroundColor={colors.orange} />
            <View style={styles.searchContainerButton}>
                <TextToggleBtn
                    title="tiešsaitē"
                    active={true}
                    onPress={() => null}
                    primaryColor={colors.green}
                    secondaryColor={colors.white}
                    style={{ marginRight: 16 }}
                />
                <TextToggleBtn
                    title="pēdējie"
                    active={false}
                    onPress={() => null}
                    primaryColor={colors.green}
                    secondaryColor={colors.white}
                    style={{ marginRight: 16 }}
                />
                <TextToggleBtn
                    title="populārakie"
                    active={false}
                    onPress={() => null}
                    primaryColor={colors.green}
                    secondaryColor={colors.white}
                    style={{ marginRight: 16 }}
                />
            </View>

            <FlatList<VideoData>
                data={items}
                renderItem={({ item }): React.ReactElement => (
                    <View style={{ marginHorizontal: 16 }}>
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
        backgroundColor: colors.white,
    },
    searchContainerButton: {
        flexDirection: 'row',
        marginBottom: 16,
        flexWrap: 'wrap',
        marginHorizontal: 16,
    },
});
