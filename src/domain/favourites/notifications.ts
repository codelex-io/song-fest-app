import { scheduleNotification, cancelNotification } from '@integration/notifications';
import { Favourite } from './types';

export const addNotification = async (fav: Favourite) => {
    const { notification } = fav;
    if (!notification) {
        return;
    }
    if (!notification.title || !notification.fireDate) {
        return;
    }
    if (fav.group === 'EVENTS') {
        const notificationId = await scheduleNotification({
            content: notification.title,
            fireDate: notification.fireDate,
            location: { tab: fav.group, itemId: fav.id },
        });
        if (notificationId) {
            notification.id = notificationId;
        }
    }
};

export const removeNotification = async (fav: Favourite) => {
    if (!fav.notification || !fav.notification.id) {
        return;
    }
    cancelNotification(fav.notification.id);
};
