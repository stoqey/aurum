import gql from 'graphql-tag';

/**
 * Root TypeDef
 */
const typeDefs = gql`
  type Query {
    demo(input: String): String
  }
  
  type Subscription {
      demo(transId: String, time: String): String
  }
`;

/**
 * Combined type defs
 */
export default [typeDefs]