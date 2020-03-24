import React from 'react';
import { Text, TextStyle } from 'react-native';
import { colors, typography } from '@styles';
import { FontWeight, TextTransform } from '@styles/typography';

type TextColor = 'white' | 'black' | string;

interface TitleProps {
    fontSize?: number;
    fonts?: FontWeight;
    textTransform?: TextTransform;
    styleProps?: TextStyle;
    textColor?: TextColor;
    numberOfLines?: number | undefined;
    ellipsizeMode?: 'head' | 'middle' | 'tail' | 'clip' | undefined;
}

const CardTitle: React.FC<TitleProps> = ({
    children,
    fontSize = 16,
    fonts = 'medium',
    textTransform = 'none',
    textColor = 'white',
    styleProps,
    numberOfLines,
    ellipsizeMode,
}) => {
    if (textColor === 'white') {
        textColor = colors.white;
    }
    if (textColor === 'black') {
        textColor = colors.darkGrey1A;
    }

    return (
        <Text
            {...{ numberOfLines, ellipsizeMode }}
            style={[
                {
                    color: textColor,
                    fontFamily: typography[fonts],
                    fontSize,
                    textTransform,
                    letterSpacing: 0.08,
                    lineHeight: 21,
                },
                styleProps,
            ]}
        >
            {children}
        </Text>
    );
};

export default CardTitle;
