export interface Data {
    items: EventItem[];
}

export interface DataEvent {
    events: EventItem[];
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
}
