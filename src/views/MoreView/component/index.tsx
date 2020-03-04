import React from 'react';
import { View, StyleSheet, ScrollView, Dimensions } from 'react-native';
import { Card } from './Card';
import { colors } from '@styles';
import { Items, ItemType } from '../content';

interface Props {
    navigate: (route: string) => void;
}

const screenHeight = Math.floor(Dimensions.get('window').height);

const MoreView: React.FC<Props> = ({ navigate }) => {
    const scrollEnabled = screenHeight < 550;
    return (
        <ScrollView style={moreViewStyles.container} scrollEnabled={scrollEnabled}>
            <View style={moreViewStyles.inner}>
                {Items.map((item: ItemType) => (
                    <Card
                        key={item.id}
                        title={item.title}
                        icon={item.icon}
                        backgroundColor={item.backgroundColor}
                        onOpen={() => item.onOpen(navigate)}
                    />
                ))}
            </View>
        </ScrollView>
    );
};

const screenWidth = Math.floor(Dimensions.get('window').width);
const cardWidth = (screenWidth - 64) / 3;
export const moreViewStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
    },
    inner: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingTop: 4,
        paddingHorizontal: 8,
    },
    card: {
        width: cardWidth,
        marginHorizontal: 8,
        alignItems: 'center',
        marginVertical: 12,
    },
    button: {
        alignItems: 'center',
    },
});

export default MoreView;
