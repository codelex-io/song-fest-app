export interface ArticleItem {
    id: string;
    title: string;
    content: string;
    image?: {
        url: string;
    };
    isFavourite: boolean;
    link: string;
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
    tickets: unknown | undefined;
}

