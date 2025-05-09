import { gql } from 'apollo-server-micro';

const typeDefs = gql`
  type Location {
    id: ID!
    name: String!
    description: String
  }

  type Query {
    locations: [Location]
  }

  
  type Mutation {
  addLocation(name: String!, description: String): Location
  addToWishlist(userId: ID!, locationId: ID!): Boolean
}

`;

export default typeDefs;
