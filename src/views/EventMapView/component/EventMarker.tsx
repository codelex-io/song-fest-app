import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Marker, LatLng } from 'react-native-maps';
import { Icon, IconType } from '@components';
import { colors } from '@styles';

interface Props {
    isSelected: boolean;
    onPress: () => void;
    coordinates: LatLng;
}

export const EventMarker = ({ isSelected, onPress, coordinates }: Props) => {
    return (
        <Marker coordinate={coordinates} onPress={onPress}>
            <View style={isSelected ? styles.clickedMarker : styles.clearMarker}>
                <View style={styles.mainMarker}>
                    <View
                        style={{
                            alignSelf: 'center',
                        }}
                    >
                        <Icon size={22} type={IconType.Search} fill={'white'} />
                    </View>
                </View>
            </View>
        </Marker>
    );
};

const styles = StyleSheet.create({
    clickedMarker: {
        width: 58,
        height: 58,
        borderRadius: 58 / 2,
        alignSelf: 'center',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        borderColor: colors.orange,
        borderStyle: 'solid',
        borderWidth: 5,
    },
    clearMarker: {
        width: 58,
        height: 58,
        borderRadius: 58 / 2,
        alignSelf: 'center',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        borderColor: 'transparent',
        borderStyle: 'solid',
        borderWidth: 5,
    },
    mainMarker: {
        backgroundColor: colors.orange,
        width: 44,
        height: 44,
        borderRadius: 44 / 2,
        justifyContent: 'center',
    },
});
