import { getStatusBarHeight } from 'react-native-status-bar-height';
import * as dateTimeUtils from './date-time-utils';
import * as errors from './errors';
import { Platform, StatusBar } from 'react-native';

const randomString = () => {
    return Math.random()
        .toString(36)
        .slice(2);
};

const statusBarHeight = () => getStatusBarHeight();

const setStatusBarBackgroundColor = (color: string) => {
    if (Platform.OS === 'android') {
        StatusBar.setBackgroundColor(color);
    }
};

export { dateTimeUtils, errors, randomString, statusBarHeight, setStatusBarBackgroundColor };
