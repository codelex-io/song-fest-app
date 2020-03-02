import React from 'react';
import { View, StyleSheet, ScrollView, Dimensions, Text } from 'react-native';
import { Card } from './Card';
import { colors } from '@styles';
import { Items, ItemType } from '../content';
import { styles } from 'react-native-markdown-display';

interface Props {
    navigate: (route: string) => void;
}

const MoreView: React.FC<Props> = ({ navigate }) => {
    return (
        <ScrollView style={moreViewStyles.container}>
            <View style={moreViewStyles.inner}>
                {Items.map((item: ItemType, id: number) => (
                    <>
                        <Card
                            key={item.id}
                            title={item.title}
                            icon={item.icon}
                            backgroundColor={item.backgroundColor}
                            onOpen={() => item.onOpen(navigate)}
                        />
                        {id === Items.length ? (
                            <View key={'stretcher'} style={styles.last}>
                                <Text>last</Text>
                            </View>
                        ) : null}
                    </>
                ))}
            </View>
        </ScrollView>
    );
};

const screenWidth = Math.floor(Dimensions.get('window').width);

let columnCount = 3;
if (screenWidth < 360) {
    columnCount = 2;
} else if (screenWidth > 600) {
    columnCount = 5;
}

const cardWidth = Math.floor((screenWidth - 32) / columnCount);

export const moreViewStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
    },
    inner: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingTop: 4,
        paddingHorizontal: 16,
    },
    card: {
        alignItems: 'center',
        marginVertical: 12,
        width: cardWidth,
    },
    button: {
        width: 99,
        alignItems: 'center',
    },
});

export default MoreView;
