import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { SimpleHeader } from '../../../src/components/headers/SimpleHeader';

storiesOf('SimpleHeader', module).add('default', () => <SimpleHeader title={'Jaunumi'} />);
