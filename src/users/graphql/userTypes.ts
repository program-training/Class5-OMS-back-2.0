export const userTypes = `  
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
  input UserLoginInput {
    email: String!
    password: String!
  }
   `;

export const userQueries = `
getUsers: [User!]!
login(user: UserLoginInput!): Response!
`;

export const userMutation = `
createUser(user: UserInput!): User!
`;
