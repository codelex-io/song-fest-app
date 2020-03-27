import { errors } from '@utils';
import { AnyType } from '@domain/AnyType';

export type Tab = 'NEWS' | 'EVENTS';

export interface Location {
    tab: Tab;
    itemId?: string;
}

export const fromNotificationData = (data: AnyType): Location | undefined => {
    try {
        if (!data) {
            return;
        }
        const { tab, itemId } = data;
        if (!tab || (tab !== 'NEWS' && tab !== 'EVENTS')) {
            return;
        }
        const normalizedTab = (tab as string).toUpperCase().trim();
        if (normalizedTab !== 'NEWS' && normalizedTab !== 'EVENTS') {
            return;
        }
        return {
            tab: tab as Tab,
            itemId: itemId as string,
        };
    } catch (e) {
        errors.onError(e);
    }
};
