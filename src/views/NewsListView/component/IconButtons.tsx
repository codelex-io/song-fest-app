import React from 'react';
import { View, StyleSheet } from 'react-native';
import { IconType } from '@components';
import { colors } from '@styles';
import { IconBtn40 } from '@components/buttons';

interface Props {
    onShare: () => void;
    isFavourite: boolean;
    onFavourite: () => void;
}

export const IconButtons: React.FC<Props> = ({ onShare, isFavourite, onFavourite }) => (
    <View style={styles.container}>
        <IconBtn40
            onPress={onShare}
            icon={IconType.Share}
            color={colors.blue}
            bgColor={colors.white}
            style={{ marginRight: 16 }}
        />
        <IconBtn40
            onPress={onFavourite}
            icon={isFavourite ? IconType.HeartFilled : IconType.Heart}
            color={colors.orange}
            bgColor={colors.white}
        />
    </View>
);

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
});
