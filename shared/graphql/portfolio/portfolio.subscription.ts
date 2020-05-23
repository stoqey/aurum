import gql from 'graphql-tag';
import { PortfolioFragment } from './portfolio.fragment'

export const PortfolioSubscription = gql`
  subscription SubscriptionToPortfolio{
    portfolios {
      ... PortfolioFragment
    }
  }
  ${PortfolioFragment}
`;

export default PortfolioSubscription;