import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { UserCategoryView } from '../../../src/views';

storiesOf('UserCategoryView', module).add('list', () => <UserCategoryView onSelect={() => null} />);
