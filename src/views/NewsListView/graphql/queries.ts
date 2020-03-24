import { gql } from 'apollo-boost';

export const FETCH_NEWS_ITEMS = gql`
    query MyQuery($searchBy: String, $first: Int) {
        items: newsItems(where: { _search: $searchBy }, orderBy: date_ASC, first: $first) {
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
