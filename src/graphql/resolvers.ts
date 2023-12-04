import UserInterface from "../users/interfaces/UserInterface";
import { getUsers, register, login } from "../users/services/usersApiService";
import UserLoginInterface from "../users/interfaces/UserLoginInterface";
const resolvers = {
  Query: {
    getUsers: async () => await getUsers(),
    login: async (_: any, user: UserLoginInterface) => await login(user),
  },
  Mutation: {
    createUser: async (_: any, { user }: { user: UserInterface }) =>
      await register(user),
  },
};

export default resolvers;
