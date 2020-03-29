import React, { useContext, useState, useEffect } from 'react';
import { View } from 'react-native';
import { colors } from '@styles';
import { Header, LongSearch } from '@components';
import { LocalizationContext } from '@localization/LocalizationContext';
import { SharedStackNavList } from 'src/navigation/stacks/SharedStack';
import ViewsHeaderFilter, { ViewsHeaderFilterOption } from '@components/filters/Filters';
import { VideoSelector } from '@domain/filters';
import FeedLayout from '@components/layouts/FeedLayout';
import Animated from 'react-native-reanimated';

const FILTER_OPTIONS: ViewsHeaderFilterOption[] = [
    { key: 'latest', title: 'LATEST', default: true },
    { key: 'popular', title: 'POPULAR', default: false },
    { key: 'online', title: 'ONLINE', default: false },
];

export const VideoView: React.FC<SharedStackNavList<'Feed'>> = ({ route, navigation }) => {
    const { translations } = useContext(LocalizationContext);
    const [activeKey, setActiveKey] = useState<VideoSelector>('latest');

    const [currentSearch, setCurrentSearch] = useState<string>('');
    useEffect(() => {
        if (route.params) {
            setCurrentSearch(route.params.searchPayload.payload);
        }
    }, [route]);

    const [animatedScrollOffset] = useState(new Animated.Value(0));

    useEffect(() => {
        animatedScrollOffset.setValue(0);
    }, []);
    return (
        <FeedLayout
            rootName="VIDEO"
            header={() => (
                <View>
                    <Header
                        title={translations.getString('VIDEO')}
                        onButton1={() => navigation.navigate('UserSettings')}
                        onButton2={() => navigation.navigate('Favorites')}
                    />
                    <LongSearch
                        backgroundColor={colors.orange}
                        onPress={() => navigation.navigate('Search', { color: colors.orange, route: 'VIDEO' })}
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
            loading={false}
            resultsState={'SUCCESS'}
        >
            {() => null}
        </FeedLayout>
    );
};
