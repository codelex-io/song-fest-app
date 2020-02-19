import React from 'react';
import NavigationAware from './NavigationAware';
import MarkdownEvent from '@views/MarkdownEvent';

export const SingleNews: React.FC<NavigationAware> = ({ navigation }) => <MarkdownEvent navigation={navigation} />;
