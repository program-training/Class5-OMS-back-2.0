import recipeTypes, {
  recipesTypeQueries,
} from "../recipes/typeDef/recipeTypes";
import bookTypes, { booksTypeQueries } from "../books/typeDefs/booksTypes";
import booksTypes from "../books/typeDefs/booksTypes";

export const typeDefs = `#graphql   
  
    ${booksTypes}
    ${recipeTypes}
  
    type Query{
      ${booksTypeQueries}
      ${recipesTypeQueries}
    } 
  
     `;
