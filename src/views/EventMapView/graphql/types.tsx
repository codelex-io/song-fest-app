export interface Data {
    items: EventItem[];
}

export interface EventItem {
    id: string;
    title: string;
    type?: string;
    date: string;
    time: string;
    locationTitle: string;
    eventType?: string;
    location: {
        latitude: number;
        longitude: number;
    };
}
