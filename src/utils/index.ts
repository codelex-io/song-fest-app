import { getStatusBarHeight } from 'react-native-status-bar-height';
import * as dateTimeUtils from './date-time-utils';
import * as errors from './errors';

const randomString = () => {
    return Math.random()
        .toString(36)
        .slice(2);
};

const statusBarHeight = () => getStatusBarHeight();

export { dateTimeUtils, errors, randomString, statusBarHeight };
