import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Icon, IconType } from '@components';
import { colors, opacity } from '@styles';

interface Props {
    onShare: () => void;
    isFavourite: boolean;
    onFavourite: () => void;
    onNavigate: () => void;
}

const SingleButton: React.FC<{ onPress: () => void; iconType: IconType; fill: string }> = ({
    onPress,
    iconType,
    fill,
}) => (
    <TouchableOpacity onPress={onPress} style={styles.button} activeOpacity={opacity.opacity8}>
        <Icon type={iconType} fill={fill} />
    </TouchableOpacity>
);

export const IconButtons: React.FC<Props> = ({ onShare, isFavourite, onFavourite, onNavigate }) => (
    <View style={styles.container}>
        <SingleButton onPress={onShare} iconType={IconType.Share} fill={colors.blue} />
        <SingleButton
            onPress={onFavourite}
            iconType={isFavourite ? IconType.HeartFilled : IconType.Heart}
            fill={colors.orange}
        />
        <SingleButton onPress={onNavigate} iconType={IconType.Navigation} fill={colors.green} />
    </View>
);

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    button: {
        padding: 8,
        backgroundColor: colors.white,
        marginRight: 16,
    },
});
