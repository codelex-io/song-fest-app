import React from 'react';
import { View, TextInput, StyleSheet, Dimensions } from 'react-native';
import { Icon, IconType } from '@components';
import { colors } from '@styles';

const width = Dimensions.get('window').width;

export const SearchBar = () => {
    return (
        <View style={styles.container}>
            <View
                style={{
                    alignSelf: 'center',
                    marginRight: 10,
                    marginLeft: 10,
                }}
            >
                <Icon size={35} type={IconType.Search} fill={'white'} />
            </View>
            <TextInput
                style={{
                    height: 60,
                    width: 300,
                    fontSize: 18,
                    alignSelf: 'flex-end',
                    color: 'white',
                    marginRight: 20,
                }}
                placeholderTextColor="white"
                placeholder="MEKLESANA"
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: width - 32,
        backgroundColor: colors.green,
        display: 'flex',
        flexDirection: 'row',
        paddingRight: 40,
        alignSelf: 'center',
        zIndex: 99,
        position: 'absolute',
        top: 0,
    },
});