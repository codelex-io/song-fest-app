import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Icon, IconType } from '@components';

export const EventCardButtons: React.FC = () => {
    return (
        <View style={styles.buttonContainer}>
            <View style={styles.button}>
                <Icon size={22} type={IconType.Share} fill={'#086BB5'} />
            </View>
            <View style={styles.button}>
                <Icon size={22} type={IconType.Heart} fill={'#F15A31'} />
            </View>
            <View style={styles.button}>
                <Icon size={22} type={IconType.Navigation} fill={'#00A258'} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    buttonContainer: {
        width: '50%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    button: {
        width: 44,
        height: 44,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    },
});
