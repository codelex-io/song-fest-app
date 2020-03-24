import * as dateTimeUtils from './date-time-utils';
import * as errors from './errors';

const randomString = () => {
    return Math.random()
        .toString(36)
        .slice(2);
};

export { dateTimeUtils, errors, randomString };
