import React, { useContext, useState, useEffect } from 'react';
import { View } from 'react-native';
import { colors } from '@styles';
import { Header, LongSearch } from '@components';
import { LocalizationContext } from '@localization/LocalizationContext';
import { SharedStackNavList } from 'src/navigation/stacks/SharedStack';
import ViewsHeaderFilter, { ViewsHeaderFilterOption } from '@components/filters/Filters';
import { VideoSelector } from '@domain';
import FeedLayout from '@components/layouts/FeedLayout';
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

    const [animatedScrollOffset] = useState(new Animated.Value(0));

    useEffect(() => {
        animatedScrollOffset.setValue(0);
    }, []);
    return (
        <FeedLayout
            header={() => (
                <View>
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
            loading={false}
            empty={true}
        >
            {() => null}
        </FeedLayout>
    );
};
