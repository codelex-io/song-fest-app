import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { EventMapView } from '../../../src/views/EventMapView';

storiesOf('EventMapView', module).add('list', () => <EventMapView />);
