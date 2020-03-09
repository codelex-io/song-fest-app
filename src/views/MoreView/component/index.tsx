import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ScrollView, Dimensions } from 'react-native';
import { Card } from './Card';
import { colors, typography } from '@styles';
import { Items, ItemType } from '../content';

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
    inner:
        screenWidth > 360
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
    card:
        screenWidth > 360
            ? {
                  width: cardWidth,
                  marginHorizontal: 8,
                  alignItems: 'center',
                  marginVertical: 12,
              }
            : {
                  marginBottom: 12,
                  flexDirection: 'row',
              },
    button:
        screenWidth > 360
            ? {
                  alignItems: 'center',
              }
            : {
                  flexDirection: 'row',
                  alignItems: 'center',
              },
    icon:
        screenWidth > 360
            ? {
                  padding: 10,
              }
            : {
                  padding: 10,
                  marginRight: 16,
              },
    text:
        screenWidth > 360
            ? {
                  textAlign: 'center',
                  letterSpacing: 0.1,
                  paddingTop: 8,
                  fontSize: 14,
                  fontFamily: typography.bold,
              }
            : {
                  textAlign: 'center',
                  letterSpacing: 0.1,
                  fontSize: 14,
                  fontFamily: typography.bold,
                  textTransform: 'uppercase',
              },
});

export default MoreView;
