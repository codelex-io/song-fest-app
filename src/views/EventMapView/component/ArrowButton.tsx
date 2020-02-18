import React, { useState } from 'react';
import { View, StyleSheet, Animated, Easing } from 'react-native';
import { Icon, IconType } from '@components';
import { colors } from '@styles';

interface Props {
    open: boolean;
}

export const ArrowButton: React.FC<Props> = props => {
    const spinValue = new Animated.Value(0);

    props.open
        ? Animated.timing(spinValue, {
              toValue: 1,
              duration: 500,
              easing: Easing.linear,
          }).start()
        : Animated.timing(spinValue, {
              toValue: 0,
              duration: 500,
              easing: Easing.linear,
          }).start();

    const spin = spinValue.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '180deg'],
    });
    return (
        <View style={styles.button}>
            <Animated.View style={{ transform: [{ rotate: spin }] }}>
                <Icon size={22} type={IconType.MenuDown} fill={'black'} />
            </Animated.View>
        </View>
    );
};

const styles = StyleSheet.create({
    button: {
        width: 44,
        height: 44,
        backgroundColor: colors.yellow,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
