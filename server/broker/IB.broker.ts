/* eslint-disable @typescript-eslint/no-unused-vars */
import { Broker, BrokerMethods } from "./broker.interface";

export class InteractiveBrokers extends Broker implements BrokerMethods {

    // events = {} as any;

    constructor() {
        super();
        // eslint-disable-next-line @typescript-eslint/no-this-alias
        const self = this;
        setInterval(() => {
            const onTrade = self.events["onTrade"];
            onTrade({ done: new Date });
        }, 1000)
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