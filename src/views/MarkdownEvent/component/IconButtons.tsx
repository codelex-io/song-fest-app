import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Icon, IconType } from '@components';
import { colors, opacity } from '@styles';

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
    <TouchableOpacity onPress={onPress} activeOpacity={opacity.opacity8}>
        <Icon type={iconType} fill={fill} />
    </TouchableOpacity>
);

export const IconButtons: React.FC<Props> = ({ onShare, onFavourite, onNavigate }) => (
    <View style={styles.container}>
        <View style={[styles.otherButtons, { backgroundColor: colors.blue }]}>
            <SingleButton onPress={onShare} iconType={IconType.Share} fill={colors.white} />
        </View>
        <View style={[styles.otherButtons, { backgroundColor: colors.orange }]}>
            <SingleButton onPress={onFavourite} iconType={IconType.Heart} fill={colors.white} />
        </View>
        <View style={[styles.otherButtons, { backgroundColor: colors.green }]}>
            <SingleButton onPress={onNavigate} iconType={IconType.Navigation} fill={colors.darkGrey1A} />
        </View>
    </View>
);

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    otherButtons: {
        marginRight: 16,
        padding: 10,
        borderRadius: 2,
    },
});
