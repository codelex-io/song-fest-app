import { gql } from 'apollo-boost';

export const FETCH_NEWS_ITEMS = gql`
    query($searchBy: String) {
        items: newsItems(where: { _search: $searchBy }, orderBy: createdAt_ASC) {
            title
            id
            date
            image {
                url(transformation: { document: { output: { format: jpg } } })
            }
            link
        }
    }
`;

export const FETCH_EVENT_ITEMS = gql`
    query($searchBy: String) {
        items: eventItems(where: { _search: $searchBy }, orderBy: date_DESC) {
            id
            title
            date
            time
            image {
                url(transformation: { document: { output: { format: jpg } } })
            }
            locationTitle
            location {
                latitude
                longitude
            }
            link
            notificationTitle
            notificationTime
        }
    }
`;
