import { Event } from '@domain/events/types';

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

export interface EventArticleItem extends ArticleItem, Event {
    locationTitle: string;
    location: {
        latitude: number;
        longitude: number;
    };
}
