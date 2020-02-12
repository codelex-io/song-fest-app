import React from 'react';
import { View, TextInput, StyleSheet, Dimensions } from 'react-native';
import { Icon, IconType } from '@components';

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
        backgroundColor: '#00A258',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        flexDirection: 'row',
        alignSelf: 'center',
        zIndex: 99,
        marginVertical: 16,
        position: 'absolute'
    },
});
