import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Icon, IconType } from '@components/Icon';
import { opacity, colors } from '@styles';

interface Props {
    onPress?: () => void;
    style?: { [key: string]: string | number };
    icon: IconType;
    color?: string;
    bgColor?: string;
}
const IconBtn24: React.FC<Props> = ({ onPress, style, icon, color = colors.darkGrey1A, bgColor = colors.white }) => {
    return (
        <TouchableOpacity
            activeOpacity={opacity.opacity8}
            onPress={onPress}
            style={[
                {
                    backgroundColor: bgColor,
                },
                { ...style },
            ]}
        >
            <Icon type={icon} fill={color} />
        </TouchableOpacity>
    );
};

export default IconBtn24;
