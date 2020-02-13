import { gql } from 'apollo-boost';

export const FETCH_NEWS_CONTENT = gql`
    query($itemId: ID) {
        newsItems(where: { id: $itemId }) {
            id
            title
            date
            image {
                url
            }
            content
        }
    }
`;

export const FETCH_NEWS_CONTENT2 = gql`
    query {
        newsItem(where: { id: "ck66fmvwp7wkv0b75xksrp1id" }) {
            id
            title
            date
            image {
                url
            }
            content
        }
    }
`;
