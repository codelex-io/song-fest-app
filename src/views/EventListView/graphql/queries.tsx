import { gql } from 'apollo-boost';

export const FETCH_EVENT_ITEMS = gql`
    query($searchBy: String) {
        items: eventItems(where: { _search: $searchBy }) {
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
            link
        }
    }
`;
