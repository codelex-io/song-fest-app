import React, { useContext, useState, useEffect } from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';
import { colors } from '@styles';
import { Header, LongSearch, Empty } from '@components';
import { LocalizationContext } from '../../localization/LocalizationContext';
import { SharedStackNavList } from 'src/navigation/stacks/SharedStack';
import ViewsHeaderFilter, { ViewsHeaderFilterOption } from '@components/filters/Filters';
import { VideoSelector } from '@domain';

const FILTER_OPTIONS: ViewsHeaderFilterOption[] = [
    { key: 'online', title: 'ONLINE' },
    { key: 'popular', title: 'POPULAR' },
    { key: 'latest', title: 'LATEST' },
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

    return (
        <View style={styles.container}>
            <View>
                <StatusBar />
                <Header title={translations.getString('VIDEO')} navigation={navigation} />
                <LongSearch
                    backgroundColor={colors.blue}
                    onPress={() => navigation.navigate('Search')}
                    searchInput={currentSearch}
                    onResetSearch={() => setCurrentSearch('')}
                    customStyles={{ backgroundColor: colors.orange }}
                />
                <ViewsHeaderFilter
                    activeKey={activeKey}
                    onPress={key => setActiveKey(key as VideoSelector)}
                    options={FILTER_OPTIONS}
                />
            </View>

            <View style={styles.contentContainer}>
                <Empty />
            </View>
        </View>
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
