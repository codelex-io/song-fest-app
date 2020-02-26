import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { Header } from '../../../src/components/headers/Header';

storiesOf('Header', module).add('default', () => <Header title={'Jaunumi'} navigate={() => null} />);
