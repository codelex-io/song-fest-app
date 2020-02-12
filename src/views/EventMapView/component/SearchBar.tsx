import React from 'react';
import { View, TextInput, StyleSheet, Dimensions } from 'react-native';
import { Icon, IconType } from '@components';
import { colors, typography } from '@styles';

const width = Dimensions.get('window').width;

export const SearchBar = () => {
    return (
        <View style={styles.container}>
            <View style={styles.iconContainer}>
                <Icon size={25} type={IconType.Search} fill={'white'} />
            </View>
            <TextInput style={styles.input} placeholderTextColor="white" placeholder="MEKLESANA" />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: width - 32,
        backgroundColor: colors.green,
        display: 'flex',
        alignItems: 'flex-start',
        flexDirection: 'row',
        alignSelf: 'center',
        zIndex: 99,
        marginVertical: 16,
        position: 'absolute',
        paddingHorizontal: 15,
    },
    input: {
        width: '85%',
        fontSize: 16,
        color: 'white',
        fontFamily: typography.bold,
    },
    iconContainer: {
        alignSelf: 'center',
        marginRight: 11,
    },
});
