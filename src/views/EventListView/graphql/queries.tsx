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
            notificationTitle
            notificationTime
        }
    }
`;

export const FETCH_EVENT_BY_ID = gql`
query($id: ID) {
    items: eventItems(where: {id: $id}) {
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
      notificationTitle
      notificationTime
    }
  }
  
`
