import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { SimpleHeader } from '../../../src/components';

storiesOf('SimpleHeader', module).add('default', () => <SimpleHeader title={'Jaunumi'} />);