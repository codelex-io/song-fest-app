import React from 'react';
import { useNavigation } from '@react-navigation/native';
import MoreViewComponent from './component';

const MoreView: React.FC = () => {
    const navigation = useNavigation();
    return <MoreViewComponent navigate={navigation.navigate} />;
};

export default MoreView;
