import gql from 'graphql-tag';

export interface Portfolio {
    position: number;
    symbol: string;
    averageCost: number;
};

const PortfolioTypeDef = gql`
    type Portfolio {
      position: Int
      symbol: String
      averageCost: Float
    }
`;

export default PortfolioTypeDef;