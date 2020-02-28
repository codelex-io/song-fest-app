import { gql } from 'apollo-boost';

export const FETCH_EVENT_ITEMS = gql`
    query {
        items: eventsItems {
            id
            title
            type
            date
            time
            locationTitle
            eventType
            location {
                latitude
                longitude
            }
        }
    }
`;
