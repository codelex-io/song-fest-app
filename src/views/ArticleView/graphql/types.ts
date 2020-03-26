export interface Data<T> {
    item: T;
}

export interface NewsItem {
    id: string;
    title: string;
    date: string;
    image?: {
        url: string;
    };
    content: string;
    link: string;
}

export interface EventItem {
    id: string;
    title: string;
    date: string;
    time: string;
    image?: {
        url: string;
    };
    locationTitle: string;
    location: {
        latitude: number;
        longitude: number;
    };
    content: string;
    link: string;
}

export interface Variables {
    id: string;
}
