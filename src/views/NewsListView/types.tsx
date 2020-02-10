export interface NewsItem {
    id: string;
    title: string;
    date: string;
    image?: {
        url: string;
    };
    isFavourite: boolean;
    link: string;
}
