import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { FilterButtons } from '../../../src/components';

storiesOf('FilterButtons', module).add('default', () => <FilterButtons buttons={[{title: 'AKTUĀLI', active: true}, {title: 'VISI', active: false}]} />);
