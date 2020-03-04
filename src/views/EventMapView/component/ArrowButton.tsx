import React, { useEffect } from 'react';
import { Animated, Easing, TouchableOpacity } from 'react-native';
import { Icon, IconType } from '@components';

interface Props {
    open: boolean;
    onPress: () => void;
    style: { [key: string]: string | number }
}

export const ArrowButton: React.FC<Props> = ({ open, onPress, style }) => {
    const spinValue = new Animated.Value(0);

    useEffect(() => {
        console.log('open clicked', open ? 'opening' : 'closing')
        open
            ? Animated.timing(spinValue, {
                toValue: 1,
                duration: 300,
                easing: Easing.linear,
            }).start()
            : Animated.timing(spinValue, {
                toValue: 0,
                duration: 300,
                easing: Easing.linear,
            }).start();
    }, [open])

    const spin = spinValue.interpolate({
        inputRange: [0, 1],
        outputRange: ['180deg', '0deg'],
    });

    return (
        <TouchableOpacity
            activeOpacity={1}
            style={style}
            onPress={onPress}
        >
            <Animated.View style={{ transform: [{ rotate: spin }] }}>
                <Icon type={IconType.MenuDown} fill={'black'} />
            </Animated.View>
        </TouchableOpacity>
    );
};
