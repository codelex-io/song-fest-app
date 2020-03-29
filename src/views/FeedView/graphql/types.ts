import { Moment } from 'moment';

export interface Data {
    items: NewsItem[] | EventsItem[];
}

export interface NewsItem {
    id: string;
    title: string;
    date: Moment;
    link: string;
    image: {
        id: string;
        url: string;
    };
}

export interface EventsItem {
    id: string;
    title: string;
    date: Moment;
    time: string;
    link: string;
    locationTitle: string;
    location: {
        longitude: string;
        latitude: string;
    };
    image: {
        id: string;
        url: string;
    };
}
export interface Variables {
    searchBy: string;
}
