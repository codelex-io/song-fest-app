import { setPredicate } from '@integration/notifications';
import { Notification } from 'react-native-firebase/notifications';
import { getCurrentUserType } from '@domain/settings';
import { resolveUserType } from './resolveUserType';

const shouldDisplay = (notification: Notification): boolean => {
    const targetUserType = resolveUserType(notification);
    console.log(targetUserType);
    if (targetUserType === true) {
        return true;
    }
    if (targetUserType === false) {
        return false;
    }
    const userType = getCurrentUserType();
    return targetUserType === userType;
};

const init = () => setPredicate(shouldDisplay);

export { init };
