import ordersQueries from "../orders/queries/ordersQueries";
const resolvers = {
  Query: {
    ...ordersQueries,
  },
};

export default resolvers;
