import React from 'react';
import { View, StyleSheet } from 'react-native';
import { colors } from '@styles';
import { LongSearch, Loading } from '@components';
import { TextToggleBtn } from '@components/buttons';

const LoadingView: React.FC = () => {
    return (
        <View style={{ flex: 1, backgroundColor: colors.white }}>
            <LongSearch backgroundColor={colors.blue} onPress={() => null} />
            <View style={styles.searchContainerButton}>
                <TextToggleBtn title="šodien" active={false} onPress={() => null} />
                <TextToggleBtn title="rīt" active={true} onPress={() => null} />
                <TextToggleBtn title="šonedēļ" active={false} onPress={() => null} />
                <TextToggleBtn title="cits" active={false} onPress={() => null} />
            </View>
            <View style={{ flex: 1, justifyContent: 'center' }}>
                <Loading />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    longSearch: {
        margin: '8 16 16 16',
    },
    searchContainerButton: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingHorizontal: 16,
    },
});

export default LoadingView;
