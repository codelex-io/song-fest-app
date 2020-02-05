import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Icon, IconType } from '@components';
import { colors } from '@styles';

interface Props {
    onShare: () => void;
    isFavourite: boolean;
    onFavourite: () => void;
}

const SingleButton: React.FC<{ onPress: () => void; iconType: IconType; fill: string }> = ({
    onPress,
    iconType,
    fill,
}) => (
    <TouchableOpacity onPress={onPress} style={styles.button} activeOpacity={0.8}>
        <Icon size={20} type={iconType} fill={fill} />
    </TouchableOpacity>
);

export const IconButtons: React.FC<Props> = ({ onShare, isFavourite, onFavourite }) => (
    <View style={styles.container}>
        <SingleButton onPress={onShare} iconType={IconType.Share} fill={colors.blue} />
        <SingleButton
            onPress={onFavourite}
            iconType={isFavourite ? IconType.HeartFilled : IconType.Heart}
            fill={colors.orange}
        />
    </View>
);

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingTop: 16,
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
