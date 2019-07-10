import {gql} from "apollo-boost";

export const FETCH_ITEMS = gql`
    {
        rates(currency: "USD") {
            currency
        }
    }
`;
