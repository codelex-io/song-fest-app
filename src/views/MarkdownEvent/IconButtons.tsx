import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Icon, IconType } from '@components';
import { colors } from '@styles';

interface Props {
    onShare: () => void;
    onFavourite: () => void;
    onNavigate: () => void;
}

const SingleButton: React.FC<{ onPress: () => void; iconType: IconType; fill: string }> = ({
    onPress,
    iconType,
    fill,
}) => (
    <TouchableOpacity onPress={onPress} activeOpacity={0.8}>
        <Icon size={20} type={iconType} fill={fill} />
    </TouchableOpacity>
);

export const IconButtons: React.FC<Props> = ({ onShare, onFavourite, onNavigate }) => (
    <View style={styles.container}>
        <View style={styles.otherButtons}>
            <SingleButton onPress={onNavigate} iconType={IconType.Navigation} fill={colors.darkGrey1A} />
        </View>
        <View style={styles.otherButtons}>
            <SingleButton onPress={onShare} iconType={IconType.Share} fill={colors.darkGrey1A} />
        </View>
        <View style={styles.heartButton}>
            <SingleButton onPress={onFavourite} iconType={IconType.Heart} fill={colors.white} />
        </View>
    </View>
);

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    otherButtons: {
        height: 40,
        width: 40,
        marginRight: 16,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.yellow,
    },
    heartButton: {
        height: 40,
        width: 40,
        marginRight: 16,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.orange,
    },
});
