import React from 'react';
import { Animated, Easing } from 'react-native';
import { Icon, IconType } from '@components';

interface Props {
    open: boolean;
}

export const ArrowButton: React.FC<Props> = props => {
    const spinValue = new Animated.Value(0);

    props.open
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

    const spin = spinValue.interpolate({
        inputRange: [0, 1],
        outputRange: ['180deg', '0deg'],
    });
    return (
        <Animated.View style={{ transform: [{ rotate: spin }] }}>
            <Icon type={IconType.MenuDown} fill={'black'} />
        </Animated.View>
    );
};
