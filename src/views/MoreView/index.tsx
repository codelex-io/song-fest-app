import React from 'react';
import MoreViewComponent from './component';
import { MoreViewStackNavProps } from 'src/navigation/stacks/MoreStack';

const MoreView: React.FC<MoreViewStackNavProps<'Feed'>> = ({ navigation }) => {
    return <MoreViewComponent navigation={navigation} />;
};

export default MoreView;
