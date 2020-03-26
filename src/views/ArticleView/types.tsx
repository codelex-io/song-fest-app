export interface ArticleItem {
    id: string;
    title: string;
    content: string;
    image?: {
        url: string;
    };
    isFavourite: boolean;
    link: string;
    buyTicket: unknown | undefined;
}

export interface NewsArticleItem extends ArticleItem {
    date: string;
}

export interface EventArticleItem extends ArticleItem {
    locationTitle: string;
    location: {
        latitude: number;
        longitude: number;
    };
    time: string;
    date: string;
}
