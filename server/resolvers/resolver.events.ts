import { PubSub } from "apollo-server-express";
import { IbkrBroker } from '@stoqey/aurum-broker-ibkr';
import { APPEVENTS } from "../../shared/AppEvent";


export const resolverEvents = async (pubsub: PubSub, ibkrBroker: IbkrBroker) => {

    ibkrBroker.when("onReady", async (ready: any) => {
        console.log('broker is ready is ready', ready);
    })

    ibkrBroker.when("onPortfolios", async (portfolios: any) => {
        pubsub.publish(APPEVENTS.PORTFOLIOS, portfolios);
    });

    ibkrBroker.when("onOrders", async (portfolios: any) => {
        pubsub.publish(APPEVENTS.ONRDERS, portfolios);
    });
    
    ibkrBroker.init();
}