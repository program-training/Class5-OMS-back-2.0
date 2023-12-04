const orderTypes = `
scalar Date

type ItemInOrder {
    productId: Int
    name: String
    description: String
    price: Float
    quantity: Int
  }
  
  type ShippingDetails {
    address: String
    userId: String
    contactNumber: String
    orderType: String
  }
  
  type Order {
    _id:ID!
    cartItems: [ItemInOrder]
    orderTime: Date
    status: String
    price: Float
    shippingDetails: ShippingDetails
  } 
`;

export const ordersTypesQueries = `
getAllOrdersFromMongoDB:[Order]
getOrderById(id:ID!):Order
`;

export default orderTypes;
