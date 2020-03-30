import React, { useContext, useState, useEffect } from 'react';
import { View } from 'react-native';
import { colors } from '@styles';
import { Header, LongSearch } from '@components';
import { LocalizationContext } from '@localization/LocalizationContext';
import ViewsHeaderFilter, { ViewsHeaderFilterOption } from '@components/filters/Filters';
import { VideoSelector } from '@domain/filters';
import FeedLayout from '@components/layouts/FeedLayout';
import Animated from 'react-native-reanimated';
import { VideoStackNavProps } from '@navigation/stacks/VideoStack';
import { useNavigation } from '@react-navigation/native';

const FILTER_OPTIONS: ViewsHeaderFilterOption[] = [
    { key: 'latest', title: 'LATEST', default: true },
    { key: 'popular', title: 'POPULAR', default: false },
    { key: 'online', title: 'ONLINE', default: false },
];

export const VideoView: React.FC<VideoStackNavProps<'Feed'>> = ({ route, navigation }) => {
    const rootNavigation = useNavigation();
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
            routeName="VIDEO"
            header={() => (
                <View>
                    <Header
                        title={translations.getString('VIDEO')}
                        onButton1={() => rootNavigation.navigate('UserSettings')}
                        onButton2={() => rootNavigation.navigate('Favorites')}
                    />
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
            loading={false}
            resultsState={'NOTHING_FILTERED'}
        >
            {() => <></>}
        </FeedLayout>
    );
};
