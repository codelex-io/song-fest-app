export interface Data {
    items: NewsItem[];
}

export interface NewsItem {
    id: string;
    title: string;
    date: string;
    image?: {
        url: string;
    };
    link: string;
}

export interface Variables {
    first: number;
}
