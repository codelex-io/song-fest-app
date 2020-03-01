import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Icon, IconType } from '@components/Icon';

interface Props {
    onPress?: () => void;
    style?: { [key: string]: string | number };
    icon: IconType;
    color: string;
    bgColor: string;
}
const IconBtn40: React.FC<Props> = ({ onPress, style, icon, color, bgColor }) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={[
                {
                    backgroundColor: bgColor,
                    padding: 8,
                },
                { ...style },
            ]}
            activeOpacity={0.8}
        >
            <Icon type={icon} fill={color} />
        </TouchableOpacity>
    );
};

export default IconBtn40;
