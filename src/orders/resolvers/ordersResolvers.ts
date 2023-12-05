import { Order } from "../models/Orders";

export const getAllOrdersFromMongoDB = async () => {
  try {
    const orders = await Order.find({});
    return orders;
  } catch (error) {
    return Promise.reject(error);
  }
};

interface GetOrderByIdInterface {
  id?: string;
  userId?: string;
}

export const getOrderById = async (_: any, { id }: GetOrderByIdInterface) => {
  try {
    const order = await Order.findById(id);
    if (!order) {
      throw new Error("Can't find your order.");
    }
    return order;
  } catch (error) {
    if (error instanceof Error) return Promise.reject(error);
  }
};
export const getOrdersByClientId = async (
  _: any,
  { userId }: GetOrderByIdInterface
) => {
  try {
    const orders = await Order.find({ "shippingDetails.userId": userId });
    if (!orders) {
      throw new Error("Can't find your orders.");
    }
    return orders;
  } catch (error) {
    if (error instanceof Error) return Promise.reject(error);
  }
};
