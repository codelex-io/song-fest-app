import { gql } from 'apollo-boost';

export const FETCH_EVENT_ITEMS = gql`
    query($SearchBy: String) {
        items: eventsItems(where: { _search: $SearchBy }) {
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
