import {
  getAllOrdersFromMongoDB,
  getOrderById,
} from "../resolvers/ordersResolvers";

const ordersQueries = {
  getAllOrdersFromMongoDB,
  getOrderById,
};

export default ordersQueries;
