export const typeDefs = `#graphql   
  
    ${booksTypes}
    ${recipeTypes}
  
    type Query{
      ${booksTypeQueries}
      ${recipesTypeQueries}
    } 
  
     `;
