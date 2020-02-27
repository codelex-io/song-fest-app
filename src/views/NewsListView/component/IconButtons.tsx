import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Icon, IconType } from '@components';
import { colors } from '@styles';

interface Props {
    onShare: () => void;
    isFavourite: boolean;
    onFavourite: () => void;
}

interface ButtonProps {
    height?: number;
    width?: number;
    onPress: () => void;
    iconType: IconType;
    fill?: string;
}
const SingleButton: React.FC<ButtonProps> = ({ onPress, iconType, fill, height, width }) => (
    <TouchableOpacity onPress={onPress} style={styles.button} activeOpacity={0.8}>
        <Icon type={iconType} fill={fill} />
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
        alignContent: 'center',
    },
});
