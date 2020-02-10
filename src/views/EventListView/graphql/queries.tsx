import { gql } from 'apollo-boost';

export const FETCH_EVENT_ITEMS = gql`
    query {
        items: eventsItems {
            id
            title
            date
            time
            image {
                url
            }
            locationTitle
            location {
                latitude
                longitude
            }
        }
    }
`;
