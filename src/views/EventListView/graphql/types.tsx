export interface Data {
    items: EventItem[];
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
    isFavourite: boolean;
    location: {
        latitude: number;
        longitude: number;
    };
}
