import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ScrollView, Dimensions } from 'react-native';
import { Card } from './Card';
import { colors } from '@styles';
import { items, ItemType } from '../content';

interface Props {
    navigate: (route: string) => void;
}

const MoreView: React.FC<Props> = ({ navigate }) => {
    const [scrollEnabled, setScrollEnabled] = useState<boolean>(false);
    const [innerHeight, setInnerHeight] = useState<number | undefined>(undefined);
    const [viewHeight, setViewHeight] = useState<number | undefined>(undefined);

    useEffect(() => {
        if (innerHeight !== undefined && viewHeight !== undefined) {
            setScrollEnabled(innerHeight > viewHeight);
        }
    }, [innerHeight, viewHeight]);

    return (
        <ScrollView
            style={moreViewStyles.container}
            scrollEnabled={scrollEnabled}
            onLayout={event => setViewHeight(event.nativeEvent.layout.height)}
        >
            <View style={moreViewStyles.inner} onLayout={event => setInnerHeight(event.nativeEvent.layout.height)}>
                {items.map((item: ItemType) => (
                    <Card
                        key={item.id}
                        title={item.title}
                        icon={item.icon}
                        backgroundColor={item.backgroundColor}
                        onOpen={() => item.onOpen(navigate)}
                        disabled={item.disabled}
                    />
                ))}
            </View>
        </ScrollView>
    );
};

const screenWidth = Math.floor(Dimensions.get('window').width);
const MEDIA_BREAK = 360;

export const moreViewStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
    },
    inner:
        screenWidth > MEDIA_BREAK
            ? {
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                  paddingTop: 4,
                  paddingHorizontal: 8,
              }
            : {
                  paddingTop: 16,
                  paddingHorizontal: 16,
              },
});

export default MoreView;
