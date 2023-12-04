export const typeDefs = `#graphql   
  type User {
    isadmin: Boolean
    password: String!
    email: String!
  }
  input UserInput {
    isAdmin: Boolean!
    password: String!
    email: String!
  }
  type ResInfoObj {
      user: User!
      token: String!
    } 
  type Response {
    message: String!
    resInfoObj: ResInfoObj!
  }
  type Query {
     getUsers: [User!]!
     login: Response!
  }
  type Mutation {
    createUser(user: UserInput!): User!
  } 
  
   `;
