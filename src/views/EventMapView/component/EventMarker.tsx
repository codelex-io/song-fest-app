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

export const EventMarker: React.FC<Props> = ({ isSelected, onPress, coordinates }) => {
    return (
        <Marker coordinate={coordinates} onPress={onPress}>
            <View style={isSelected ? styles.clickedMarker : styles.clearMarker}>
                <View
                    style={{
                        backgroundColor: colors.orange,
                        width: 44,
                        height: 44,
                        borderRadius: 44 / 2,
                        justifyContent: 'center',
                    }}
                >
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
        borderColor: colors.blue,
        borderStyle: 'solid',
        borderWidth: 5,
    },
});
