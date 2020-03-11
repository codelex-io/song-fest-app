import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { LanguageView } from '../../../src/views';

storiesOf('LanguageView', module).add('list', () => <LanguageView onSelect={() => null} />);
