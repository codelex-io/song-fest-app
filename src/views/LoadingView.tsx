import React from 'react';
import { View, StyleSheet } from 'react-native';
import { colors } from '@styles';
import { LongSearch, TimeFilterButton, Loading } from '@components';

const LoadingView: React.FC = () => {
    return (
        <View style={{ flex: 1, backgroundColor: colors.white }}>
            <LongSearch backgroundColor={colors.blue} onPress={() => console.log('hello, i like coca cola')} />
            <View style={styles.searchContainerButton}>
                <TimeFilterButton title="šodien" active={false} onPress={() => null} />
                <TimeFilterButton title="rīt" active={true} onPress={() => null} />
                <TimeFilterButton title="šonedēļ" active={false} onPress={() => null} />
                <TimeFilterButton title="cits" active={false} onPress={() => null} />
            </View>
            <View style={{ flex: 1, justifyContent: 'center' }}>
                <Loading />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    searchContainerButton: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingHorizontal: 16,
    },
});

export default LoadingView;
