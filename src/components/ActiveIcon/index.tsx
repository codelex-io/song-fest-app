import React from 'react';
import { View } from 'react-native';

interface IconProps {
    size: number;
}

const ActiveIcon: React.FC<IconProps> = ({ size }) => (
    <View style={{ height: size, width: size, backgroundColor: '#F05A30', borderRadius: size }}></View>
);

export default ActiveIcon;
