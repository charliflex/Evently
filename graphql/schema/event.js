import { gql } from 'apollo-server-micro';

export const typeDefs = gql`
  type Event {
    _id: ID!
    name: String!
    date: String!
    location: String!
    description: String!
  }

  type Query {
    events: [Event!]!
    event(id: ID!): Event
  }

  type Mutation {
    createEvent(name: String!, date: String!, location: String!, description: String!): Event!
  }
`;
