import React from 'react';
import FavoriteListView from '@views/FavoriteListView';
import NavigationAware from './NavigationAware';

export const Favourites: React.FC<NavigationAware> = ({ navigation }) => <FavoriteListView navigation={navigation} />;
