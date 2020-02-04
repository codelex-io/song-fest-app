import React from 'react';
import SingleNewsView from '../views/SingleNewsView/index';
import NavigationAware from './NavigationAware';

export const SingleNews: React.FC<NavigationAware> = ({ navigation }) => (
    <SingleNewsView navigation={navigation}></SingleNewsView>
);
