import React, { useEffect, useState } from 'react';
import { useApolloClient } from '@apollo/react-hooks';
import { PortfolioSubscription, Portfolio } from '../../../shared/graphql/portfolio';
import isEmpty from 'lodash/isEmpty';

export function Portfolios() {
    const client = useApolloClient();

    const [localPortfolios, setLocalPortfolios] = useState<Portfolio[]>([])

    useEffect(() => {
        const observer = client.subscribe<any, any>({
            query: PortfolioSubscription,
            variables: {
                date: `${new Date().getTime()}`,
            },
        })

        const subscription = observer.subscribe(({ data }) => {
            const portfolios: any[] = data && data.portfolios;
            setLocalPortfolios(portfolios);
        })

        return () => subscription.unsubscribe()
    }, []);

    return (
        <div className="left-sm">
            {!isEmpty(localPortfolios) && (
                localPortfolios.map((portfolio) => {
                    const { symbol, averageCost, position } = portfolio;
                    return (
                        <div key={portfolio.symbol}>
                            <div className="single-left-sm">
                                <h4>{symbol}</h4>
                                <h5>Market value <span>{averageCost * position}</span></h5>
                                <h5>1300 <span>30%</span></h5>
                            </div>
                        </div>
                    )
                })
            )}
        </div>
    )
}