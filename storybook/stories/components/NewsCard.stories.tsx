import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { NewsCard } from '../../../src/components';

storiesOf('NewsCard', module).add('default', () => (
    <NewsCard
        info={[{ date: '25.10.2019', title: 'Latvijas Skolu jaunatnes dziesmu un deju svētku vizuālā identitāte' }]}
    />
));
