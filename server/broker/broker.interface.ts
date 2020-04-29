export enum BROKEREVENTS {
    onPortfolios = 'onPortfolios',
    onTrade = 'onTrade', 
    onMarketData = 'onMarketData'
}

export type BrokerEventsTypes = keyof typeof BROKEREVENTS;

export interface BrokerEvents {
    // portfolios
    onPortfolios: (portfolios: any[]) => Promise<any>;
    onTrade: (trade: any) => Promise<any>

    // symbols
    onMarketData: () => Promise<any>;
}

export interface BrokerMethods {
    // Portfolio
    getAllPositions: () => Promise<any>;
    enterPosition: (portfolio: any[]) => Promise<any | null>;
    exitPosition: (portfolio: any[]) => Promise<any | null>;

    // Symbol
    searchSymbol: (symbol: string, symbolType: string) => Promise<any | null>;
    quoteSymbol: (symbol: string, symbolType: string) =>  Promise<any | null>;
    getMarketData: (symbol: string, symbolType: string) => Promise<any | null>;
}

// @ts-ignore
export class Broker implements BrokerMethods {
    
    events: BrokerEvents = {} as any;

    constructor() {
    }

    /**
     * subscribe
     */
    public sub(event: BrokerEventsTypes, response: () => Promise<any>): void {
        this.events[event] = response;
    }
}