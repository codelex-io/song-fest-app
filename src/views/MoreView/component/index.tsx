import React, { useState, useEffect, useContext } from 'react';
import { View, StyleSheet, Dimensions, ScrollView } from 'react-native';
import { Card } from './Card';
import { colors } from '@styles';
import { items, ItemType } from '../content';
import { Header } from '@components';
import { LocalizationContext } from '@localization/LocalizationContext';
import { useStoryBook } from '@domain/storybook';
import { statusBarHeight } from '@utils';
import { useNavigation } from '@react-navigation/native';

const MoreView: React.FC = () => {
    const rootNavigation = useNavigation();
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
        <View style={styles.container}>
            <Header
                title={translations.getString('MORE')}
                onButton1={() => rootNavigation.navigate('UserSettings')}
                onButton2={() => rootNavigation.navigate('Favorites')}
                onLongPressTitle={() => {
                    if (devPressCount < 2) {
                        setDevPressCount(devPressCount + 1);
                        return;
                    }
                    setStoryBookActive(true);
                }}
            />
            <ScrollView
                style={styles.scrollView}
                scrollEnabled={scrollEnabled}
                onLayout={event => setViewHeight(event.nativeEvent.layout.height)}
            >
                <View style={styles.inner} onLayout={event => setInnerHeight(event.nativeEvent.layout.height)}>
                    {items.map((item: ItemType) => (
                        <Card
                            key={item.id}
                            title={item.title}
                            icon={item.icon}
                            backgroundColor={item.backgroundColor}
                            onOpen={() => item.onOpen(rootNavigation.navigate)}
                            disabled={item.disabled}
                        />
                    ))}
                </View>
            </ScrollView>
        </View>
    );
};

const screenWidth = Math.floor(Dimensions.get('screen').width);
const MEDIA_BREAK = 260;

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
        paddingTop: statusBarHeight(),
    },
    scrollView: {
        flex: 1,
        width: '100%',
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
