import React from 'react';
import { StyleProp, ImageStyle, ImageSourcePropType } from 'react-native';
import FitImage from 'react-native-fit-image';
import { colors } from '@styles';

interface ImageProps {
    style?: StyleProp<ImageStyle>;
    source: ImageSourcePropType;
    height?: number;
    width?: number;
}

export const Image: React.FC<ImageProps> = props => {
    return (
        <FitImage
            height={props.height}
            width={props.width}
            source={props.source}
            style={props.style}
            indicator
            indicatorColor={colors.randomColor()}
            indicatorSize="small"
            resizeMode="cover"
            resizeMethod="auto"
        />
    );
};
