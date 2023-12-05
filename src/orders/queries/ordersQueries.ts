import {
  getAllOrdersFromMongoDB,
  getOrderById,
  getOrdersByClientId,
} from "../resolvers/ordersResolvers";

const ordersQueries = {
  getAllOrdersFromMongoDB,
  getOrderById,
  getOrdersByClientId,
};

export default ordersQueries;
