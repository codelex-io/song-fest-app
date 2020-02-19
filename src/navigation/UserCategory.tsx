import React from 'react';
import NavigationAware from './NavigationAware';
import { UserCategoryView } from '@views/UserCategoryView';

export const UserCategory: React.FC<NavigationAware> = ({ navigation }) => <UserCategoryView navigation={navigation} />;
