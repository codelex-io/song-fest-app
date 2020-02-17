import React from 'react';
import { NewsListViewIndex } from '../views/NewsListView';
import NavigationAware from './NavigationAware';

export const News: React.FC<NavigationAware> = ({ navigation }) => <NewsListViewIndex navigation={navigation}></NewsListViewIndex>;
