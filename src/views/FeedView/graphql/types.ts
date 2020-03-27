export interface Data<T> {
    items: T[];
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
    searchBy: string;
    first: number;
}
