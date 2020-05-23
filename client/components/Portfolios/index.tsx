import React, { useEffect } from 'react';
import { useApolloClient } from '@apollo/react-hooks';
import { PortfolioSubscription } from '../../../shared/graphql/portfolio';

export function Portfolios() {
    const client = useApolloClient();

    useEffect(() => {
        const observer = client.subscribe<any, any>({
            query: PortfolioSubscription,
            variables: {
                date: `${new Date().getTime()}`,
            },
        })

        const subscription = observer.subscribe(({ data }) => {

            const portfolios: any[] = data && data.portfolios;
            console.log('on portfolios are', portfolios);

        })

        return () => subscription.unsubscribe()
    }, [])

    return (
        <div className="left-sm">
            <div className="single-left-sm">
                <h4>AAPL</h4>
                <h5>1200 <span>20%</span></h5>
                <h5>1300 <span>30%</span></h5>
            </div>
            <div className="single-left-sm">
                <h4>AAPL</h4>
                <h5>1200 <span>20%</span></h5>
                <h5>1300 <span>30%</span></h5>
            </div>
            <div className="single-left-sm active">
                <h4>AAPL</h4>
                <h5>1200 <span>20%</span></h5>
                <h5>1300 <span>30%</span></h5>
            </div>
            <div className="single-left-sm">
                <h4>AAPL</h4>
                <h5>1200 <span>20%</span></h5>
                <h5>1300 <span>30%</span></h5>
            </div>
            <div className="single-left-sm active">
                <h4>AAPL</h4>
                <h5>1200 <span>20%</span></h5>
                <h5>1300 <span>30%</span></h5>
            </div>
            <div className="single-left-sm active">
                <h4>AAPL</h4>
                <h5>1200 <span>20%</span></h5>
                <h5>1300 <span>30%</span></h5>
            </div>
            <div className="single-left-sm active">
                <h4>AAPL</h4>
                <h5>1200 <span>20%</span></h5>
                <h5>1300 <span>30%</span></h5>
            </div>
            <div className="single-left-sm active">
                <h4>AAPL</h4>
                <h5>1200 <span>20%</span></h5>
                <h5>1300 <span>30%</span></h5>
            </div>
            <div className="single-left-sm">
                <h4>AAPL</h4>
                <h5>1200 <span>20%</span></h5>
                <h5>1300 <span>30%</span></h5>
            </div>
        </div>

    )
}