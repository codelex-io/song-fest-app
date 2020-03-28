export interface Data {
    items: NewsItem[] | EventsItem[];
}

export interface NewsItem {
    id: string;
    title: string;
    date: string;
    link: string;
    image: {
        id: string;
        url: string;
    };
}

export interface EventsItem {
    id: string;
    title: string;
    date: string;
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
