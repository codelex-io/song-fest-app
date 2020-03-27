import { Moment } from 'moment';

export interface Event {
    id: string;
    title: string;
    date: string | Moment;
    time: string;
    notificationTitle?: string;
    notificationTime?: string;
}
