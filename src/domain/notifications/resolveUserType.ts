import { Notification } from 'react-native-firebase/notifications';
import { UserType } from '@domain/settings';

export const resolveUserType = (notification: Partial<Notification>): UserType | boolean => {
    if (!notification.data) {
        return false;
    }
    const { group } = notification.data;
    if (group === undefined) {
        return true;
    }
    try {
        const nGroup = Number.parseInt(group);
        switch (nGroup) {
            case 1:
                return 'parent';
            case 2:
                return 'participant';
            case 3:
                return 'visitor';
            default:
                return false;
        }
    } catch (e) {
        return false;
    }
};
