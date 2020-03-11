import React, { useState, useEffect, useContext } from 'react';
import { View, StyleSheet, ScrollView, Dimensions, StatusBar } from 'react-native';
import { Card } from './Card';
import { colors, typography } from '@styles';
import { Items, ItemType } from '../content';
import { Header } from '@components';
import { LocalizationContext } from '../../../localization/LocalizationContext';
import { StackNavigationProp } from '@react-navigation/stack';
import { MoreViewStackParamsList } from 'src/navigation/stacks/MoreStack';
import { useStoryBook } from '@domain/storybook';

interface Props {
    navigation: StackNavigationProp<MoreViewStackParamsList, 'Feed' | 'Favorites' | 'Language' | 'UserCategory'>;
}

const MoreView: React.FC<Props> = ({ navigation }) => {
    const [scrollEnabled, setScrollEnabled] = useState<boolean>(false);
    const [innerHeight, setInnerHeight] = useState<number | undefined>(undefined);
    const [viewHeight, setViewHeight] = useState<number | undefined>(undefined);
    const { translations } = useContext(LocalizationContext);
    const [devPressCount, setDevPressCount] = useState<number>(0);
    const { setStoryBookActive } = useStoryBook();

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
            <View>
                <StatusBar />
                <Header
                    title={translations.getString('MORE')}
                    navigation={navigation}
                    onLongPressTitle={() => {
                        if (devPressCount < 2) {
                            setDevPressCount(devPressCount + 1);
                            return;
                        }
                        setStoryBookActive(true);
                    }}
                />
            </View>
            <View style={moreViewStyles.inner} onLayout={event => setInnerHeight(event.nativeEvent.layout.height)}>
                {Items.map((item: ItemType) => (
                    <Card
                        key={item.id}
                        title={item.title}
                        icon={item.icon}
                        backgroundColor={item.backgroundColor}
                        onOpen={() => item.onOpen(navigation.navigate)}
                        disabled={item.disabled}
                    />
                ))}
            </View>
        </ScrollView>
    );
};

const screenWidth = Math.floor(Dimensions.get('window').width);
const MEDIA_BREAK = 360;
const cardWidth = (screenWidth - 64) / 3;

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
    card:
        screenWidth > MEDIA_BREAK
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
        screenWidth > MEDIA_BREAK
            ? {
                  alignItems: 'center',
              }
            : {
                  flexDirection: 'row',
                  alignItems: 'center',
              },
    icon:
        screenWidth > MEDIA_BREAK
            ? {
                  padding: 10,
              }
            : {
                  padding: 10,
                  marginRight: 16,
              },
    text:
        screenWidth > MEDIA_BREAK
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
