export interface Data {
    items: EventItem[];
}

export interface Variables {
    searchBy: string;
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
}
