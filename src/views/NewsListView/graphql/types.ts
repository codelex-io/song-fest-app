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
    content: string;
}
