import React from 'react';
import { View, StyleSheet } from 'react-native';
import { colors } from '@styles';
import { LongSearch, Empty } from '@components';
import { TextToggleBtn } from '@components/buttons';
import { TimeSelector } from '@domain/filters';

interface Props {
    loading: boolean;
    activeKey: TimeSelector;
    searchInput: string;
}

const EmptyView: React.FC<Props> = ({ activeKey, searchInput }) => {
    return (
        <View style={{ flex: 1, backgroundColor: colors.white }}>
            <LongSearch
                backgroundColor={colors.blue}
                onPress={() => null}
                searchInput={searchInput}
                onResetSearch={() => null}
                customStyles={styles.longSearch}
            />
            <View style={styles.searchContainerButton}>
                <TextToggleBtn
                    title="šodien"
                    active={activeKey === 'today'}
                    onPress={() => null}
                    primaryColor={colors.white}
                    secondaryColor={colors.orange}
                />
                <TextToggleBtn
                    title="rīt"
                    active={activeKey === 'tomorrow'}
                    onPress={() => null}
                    primaryColor={colors.white}
                    secondaryColor={colors.orange}
                />
                <TextToggleBtn
                    title="šonedēļ"
                    active={activeKey === 'this-week'}
                    onPress={() => null}
                    primaryColor={colors.white}
                    secondaryColor={colors.orange}
                />
                <TextToggleBtn
                    title="cits"
                    active={activeKey === 'all'}
                    onPress={() => null}
                    primaryColor={colors.white}
                    secondaryColor={colors.orange}
                />
            </View>
            <View style={{ flex: 1, justifyContent: 'center', alignSelf: 'center' }}>
                <Empty />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    longSearch: {
        marginTop: 8,
        marginBottom: 16,
        marginHorizontal: 16,
    },
    searchContainerButton: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingHorizontal: 16,
    },
});

export default EmptyView;
