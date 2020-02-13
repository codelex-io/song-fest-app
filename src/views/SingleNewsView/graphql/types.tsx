export interface Data {
    newsItems: NewsItem[];
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
