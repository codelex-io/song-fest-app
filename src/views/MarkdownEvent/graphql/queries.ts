import { gql } from 'apollo-boost';

export const FETCH_TARGET_NEWS_ITEM = gql`
    query($id: ID!) {
        item: newsItem(where: { id: $id }) {
            id
            title
            date
            image {
                url
            }
            content
            link
        }
    }
`;
export const FETCH_TARGET_EVENTS_ITEM = gql`
    query($id: ID!) {
        item: eventItem(where: { id: $id }) {
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
