import { errors } from '@utils';

type Tab = 'NEWS' | 'EVENTS';

export interface Location {
    tab: Tab;
    itemId?: string;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const fromNotificationData = (data: any): Location | undefined => {
    try {
        if (!data) {
            return;
        }
        const { tab, itemId } = data;
        if (!tab || (tab !== 'NEWS' && tab !== 'EVENTS')) {
            return;
        }
        const normalizedTab = (tab as string).toLowerCase().trim();
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
