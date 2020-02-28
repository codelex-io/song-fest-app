export interface Data {
    item: NewsItem;
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

export interface Variables {
    id: string;
}
