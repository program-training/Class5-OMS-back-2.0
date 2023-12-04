export const typeDefs = `#graphql   
  type User {
    _id: ID
    isAdmin: Boolean
    password: string
    email: String
  }
  input UserInput {
    isAdmin: Boolean
    password: string
    email: String
  }
  type Query {
     getUserById(id: ID!): User!
     getUsers: [User!]!
  }
  type Mutation {
    createUser(user: UserInput!): UserInput
  } 
  
     `;
