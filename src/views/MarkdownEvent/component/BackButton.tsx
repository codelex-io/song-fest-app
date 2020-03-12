import React, { useState, useEffect } from 'react';
import { StyleSheet, Animated, Easing } from 'react-native';
import { colors } from '@styles';
import TextColorFilledBtn from '@components/buttons/TextColorFilledBtn';

interface Props {
    onPress: () => void;
    isVisible: boolean;
    parentHeight: number | undefined;
}

const BackButton: React.FC<Props> = ({ onPress, isVisible, parentHeight }) => {
    const [btnHeightAnimation] = useState(new Animated.Value(Math.floor(parentHeight ? parentHeight : 1000)));
    const [opacityAnimation] = useState(new Animated.Value(0));
    const animationDuration = 500;

    const animate = () => {
        if (parentHeight !== undefined) {
            Animated.parallel([
                Animated.timing(btnHeightAnimation, {
                    toValue: isVisible ? parentHeight - 64 : parentHeight + 64,
                    duration: animationDuration,
                    easing: Easing.linear,
                }),
                Animated.timing(opacityAnimation, {
                    toValue: isVisible ? 1 : 0,
                    duration: animationDuration,
                    easing: Easing.linear,
                }),
            ]).start();
        }
    };

    useEffect(() => {
        animate();
    }, [isVisible]);

    const opacity = opacityAnimation.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 1],
    });
    const animationHeight = { top: btnHeightAnimation };
    const animationOpacity = { opacity: opacity };

    return (
        <Animated.View style={[styles.animatedBtnContainer, animationHeight, animationOpacity]}>
            <TextColorFilledBtn style={{ backgroundColor: colors.yellow }} onPress={onPress}>
                Atpakaļ uz Augšu
            </TextColorFilledBtn>
        </Animated.View>
    );
};
export default BackButton;

const styles = StyleSheet.create({
    animatedBtnContainer: {
        position: 'absolute',
        left: 16,
    },
});
