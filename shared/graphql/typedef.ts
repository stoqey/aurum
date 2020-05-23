import gql from 'graphql-tag';
import { PortfolioTypeDef } from './portfolio';


/**
 * Root TypeDef
 */
const typeDefs = gql`
  type Query {
    demo(input: String): String
  }
  
  type Subscription {
      demo(transId: String, time: String): String
      portfolios: [Portfolio]
  }
`;

/**
 * Combined type defs
 */
export default [typeDefs, PortfolioTypeDef]