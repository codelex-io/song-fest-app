import React from 'react';
import MoreView from '../views/MoreView/index'
import NavigationAware from './NavigationAware';


export const More: React.FC<NavigationAware> = ({ navigation }) => <MoreView navigation={navigation}></MoreView>;
