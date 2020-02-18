import React from 'react';
import { View, TextInput, StyleSheet, Dimensions } from 'react-native';
import { Icon, IconType } from '@components';
<<<<<<< HEAD
import { colors, typography } from '@styles';
=======
import { colors } from '@styles';
>>>>>>> master

const width = Dimensions.get('window').width;

export const SearchBar = () => {
    return (
        <View style={styles.container}>
            <View style={styles.iconContainer}>
<<<<<<< HEAD
                <Icon size={25} type={IconType.Search} fill={'white'} />
            </View>
            <TextInput style={styles.input} placeholderTextColor="white" placeholder="MEKLĒŠANA" />
=======
                <Icon size={35} type={IconType.Search} fill={'white'} />
            </View>
            <TextInput
                style={styles.text}
                placeholderTextColor="white"
                placeholder="Meklēt pēc nosaukuma, vietas uc."
            />
>>>>>>> master
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: width - 32,
        backgroundColor: colors.green,
        display: 'flex',
<<<<<<< HEAD
        alignItems: 'flex-start',
=======
>>>>>>> master
        flexDirection: 'row',
        alignSelf: 'center',
        zIndex: 99,
        marginVertical: 16,
        position: 'absolute',
<<<<<<< HEAD
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
=======
        top: 8,
    },
    iconContainer: {
        alignSelf: 'center',
        marginRight: 10,
        marginLeft: 10,
    },
    text: {
        height: 60,
        width: 300,
        fontSize: 18,
        alignSelf: 'flex-end',
        color: 'white',
        marginRight: 20,
        textTransform: 'uppercase',
>>>>>>> master
    },
});
