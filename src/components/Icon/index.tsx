import React from 'react';
import { View } from 'react-native';

interface IconProps {
    size: number;
}

const Icon: React.FC<IconProps> = ({ size }) => (
    <View style={{ height: size, width: size, backgroundColor: 'black' }}></View>
);

export default Icon;
