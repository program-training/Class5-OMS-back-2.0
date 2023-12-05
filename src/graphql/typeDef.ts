import orderTypes, { ordersTypesQueries } from "../orders/typeDef/ordersTypes";


export const typeDefs = `#graphql

${orderTypes}

type Query{
${ordersTypesQueries}
}

 `;

