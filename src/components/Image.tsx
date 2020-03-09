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

export const Image: React.FC<ImageProps> = ({ style, source, height, width }) => {
    return (
        <FitImage
            height={height}
            width={width}
            source={source}
            style={[
                {
                    height,
                    width: width ? width : '100%',
                },
                style,
            ]}
            indicator
            indicatorColor={colors.randomColor()}
            indicatorSize="small"
            resizeMode="cover"
            resizeMethod="auto"
        />
    );
};
