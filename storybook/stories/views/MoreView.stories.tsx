import React from 'react';
import { storiesOf } from '@storybook/react-native';
import MoreView from '../../../src/views/MoreView/component';

storiesOf('MoreView', module).add('list', () => <MoreView navigate={() => null} />);
