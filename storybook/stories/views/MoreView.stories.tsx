import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { MoreView } from '../../../src/views';

storiesOf('MoreView', module).add('list', () => <MoreView navigate={() => null} />);
