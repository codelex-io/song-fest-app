import { gql } from 'apollo-boost';

export const FETCH_NEWS_ITEMS = gql`
    query($first: Int) {
        items: newsItems(orderBy: date_ASC, first: $first) {
            id
            title
            date
            image {
                url
            }
            link
        }
    }
`;

export const FETCH_NEWS_ALL_ITEMS = gql`
    query {
        items: newsItems(orderBy: title_ASC) {
            id
            title
            date
            image {
                url
            }
            link
        }
    }
`;
