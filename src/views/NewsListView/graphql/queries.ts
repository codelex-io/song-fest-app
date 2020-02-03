import { gql } from 'apollo-boost';

export const FETCH_NEWS_ITEMS = gql`
    query {
        items: newsItems {
            id
            title
            date
            image {
                url
            }
        }
    }
`;
