import { gql } from "apollo-server";

export default gql`
  type Query {
    """
    Test Message.
    """
    hello: String!
  }
`;
