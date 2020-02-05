import { gql } from 'apollo-boost';

export const FETCH_EVENT_ITEMS = gql`
    query {
        events: eventsItems {
            id
            title
            date
            time
            image {
                url
            }
            locationTitle
        }
    }
`;
