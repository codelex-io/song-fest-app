export interface NewsItem {
    id: string;
    title: string;
    date: string;
    content: string;
    image?: {
        url: string;
    };
    isFavourite: boolean;
    link: string;
}
