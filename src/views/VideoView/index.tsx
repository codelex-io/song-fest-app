import React, { useContext, useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { colors } from '@styles';
import { Header, LongSearch, Empty } from '@components';
import { LocalizationContext } from '@localization/LocalizationContext';
import { SharedStackNavList } from 'src/navigation/stacks/SharedStack';
import ViewsHeaderFilter, { ViewsHeaderFilterOption } from '@components/filters/Filters';
import { VideoSelector } from '@domain';
import FeedLayout from '@components/layers/FeedLayout';
import Animated from 'react-native-reanimated';

const FILTER_OPTIONS: ViewsHeaderFilterOption[] = [
    { key: 'latest', title: 'LATEST' },
    { key: 'popular', title: 'POPULAR' },
    { key: 'online', title: 'ONLINE' },
];

export const VideoView: React.FC<SharedStackNavList<'Feed'>> = ({ route, navigation }) => {
    const { translations } = useContext(LocalizationContext);
    const [activeKey, setActiveKey] = useState<VideoSelector>('latest');

    const [currentSearch, setCurrentSearch] = useState<string>('');
    useEffect(() => {
        if (route.params) {
            setCurrentSearch(route.params.payload);
        }
    }, [route]);

    const loading = false;

    const [animatedScrollOffset] = useState(new Animated.Value(0));
    const [headerHeightMeasure, setHeaderHeightMeasure] = useState<number>(182.09524536132812);

    useEffect(() => {
        animatedScrollOffset.setValue(0);
    }, []);
    return (
        <FeedLayout
            header={() => (
                <View onLayout={event => setHeaderHeightMeasure(event.nativeEvent.layout.height)}>
                    <Header title={translations.getString('VIDEO')} navigation={navigation} />
                    <LongSearch
                        backgroundColor={colors.orange}
                        onPress={() => navigation.navigate('Search', { color: colors.orange })}
                        searchInput={currentSearch}
                        onResetSearch={() => setCurrentSearch('')}
                    />
                    <ViewsHeaderFilter
                        activeKey={activeKey}
                        onPress={key => setActiveKey(key as VideoSelector)}
                        options={FILTER_OPTIONS}
                    />
                </View>
            )}
            loading={loading}
        >
            {() => (
                <View style={[styles.contentContainer, { paddingTop: headerHeightMeasure }]}>
                    <Empty />
                </View>
            )}
        </FeedLayout>
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
    contentContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
