import gql from 'graphql-tag';

export const PortfolioFragment = gql`
    fragment PortfolioFragment on Portfolio {
        position
        symbol
        averageCost
    }
`;

export default PortfolioFragment;
