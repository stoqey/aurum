import { PubSub } from "apollo-server-express";
import { MilleBroker } from '@stoqey/aurum-broker-mille';
import { IbkrBroker } from '@stoqey/aurum-broker-ibkr';
import { APPEVENTS } from "../../shared/AppEvent";
import { log } from "../log";


export const resolverEvents = async (pubsub: PubSub, broker: IbkrBroker | MilleBroker) => {

    broker.when("onReady", async (ready: any) => {
        log('broker is ready', ready);
        const positions = await broker.getAllPositions();
        log('positions are', positions.map((po: { symbol: any; }) => po.symbol).join(','))
        pubsub.publish(APPEVENTS.PORTFOLIOS, positions);
    })

    broker.when("onPortfolios", async (portfolios: any[]) => {
        pubsub.publish(APPEVENTS.PORTFOLIOS, portfolios);
    });

    broker.when("onOrders", async (orders: any[]) => {
        pubsub.publish(APPEVENTS.ORDERS, orders);
    });

    broker.init();
}