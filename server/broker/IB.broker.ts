/* eslint-disable @typescript-eslint/no-unused-vars */
import { Broker, BrokerMethods } from "./broker.interface";

export class InteractiveBrokers extends Broker implements BrokerMethods {

    events = {} as any;

    constructor() {
        super();
    }

    public async getAllPositions(): Promise<any> {
        return {}
    }

    public async enterPosition(portfolio: any[]): Promise<any> {
        return null;
    }

    public async exitPosition(portfolio: any[]): Promise<any> {
        return null;
    }

    public async searchSymbol(symbol: string, symbolType: string): Promise<any> {
        return null;

    }
    public async quoteSymbol(symbol: string, symbolType: string): Promise<any> {
        return null;
    }

    public async getMarketData(symbol: string, symbolType: string): Promise<any> {
        return null;
    }
}