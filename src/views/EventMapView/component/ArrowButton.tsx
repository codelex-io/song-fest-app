import React, { useEffect, useState } from 'react';
import { Animated, Easing, TouchableOpacity } from 'react-native';
import { Icon, IconType } from '@components';

interface Props {
    open: boolean;
    onPress: () => void;
    style: { [key: string]: string | number };
}

export const ArrowButton: React.FC<Props> = ({ open, onPress, style }) => {
    const [spinValue] = useState(new Animated.Value(0));

    useEffect(() => {
        Animated.timing(spinValue, {
            toValue: open ? 180 : 0,
            duration: 500,
            easing: Easing.linear,
        }).start();
    }, [open]);

    const spin = spinValue.interpolate({
        inputRange: [0, 180],
        outputRange: ['0deg', '180deg'],
    });

    return (
        <TouchableOpacity activeOpacity={1} style={style} onPress={onPress}>
            <Animated.View style={{ transform: [{ rotate: spin }] }}>
                <Icon type={IconType.MenuUp} fill={'black'} />
            </Animated.View>
        </TouchableOpacity>
    );
};
