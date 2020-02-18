import { Moment } from "moment";

export interface EventItem {
    id: string;
    title: string;
    date: Moment;
    time: string;
    image?: {
        url: string;
    };
    locationTitle: string;
    isFavourite: boolean;
    location: {
        latitude: number;
        longitude: number;
    };
}

