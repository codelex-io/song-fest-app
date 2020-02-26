import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { UserSettingsView } from '../../../src/views';

storiesOf('UserSettings', module).add('list', () => <UserSettingsView />);
