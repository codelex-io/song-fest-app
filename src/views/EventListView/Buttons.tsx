import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Icon, IconType } from '@components';
import { colors } from '@styles';

interface Props {
    onShare: () => void;
    onFavourite: () => void;
    onNavigate: () => void;
}

const SingleButton: React.FC<{ onPress: () => void; iconType: IconType }> = ({ onPress, iconType }) => (
    <TouchableOpacity onPress={onPress} style={styles.button} activeOpacity={0.8}>
        <Icon size={20} type={iconType} />
    </TouchableOpacity>
);

export const Buttons: React.FC<Props> = ({ onShare, onFavourite, onNavigate }) => (
    <View style={styles.container}>
        <SingleButton onPress={onShare} iconType={IconType.Share} />
        <SingleButton onPress={onFavourite} iconType={IconType.Heart} />
        <SingleButton onPress={onNavigate} iconType={IconType.Navigation} />
    </View>
);

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    button: {
        height: 40,
        width: 40,
        backgroundColor: colors.white,
        marginRight: 16,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
