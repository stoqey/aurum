import { PubSub } from "apollo-server-express";

import { APPEVENTS } from "../../shared/AppEvent";
import IbkrBroker from "@stoqey/aurum-broker-ibkr";

export const SubscriptionResolver = (pubsub: PubSub, broker: IbkrBroker) => ({
    demo: {
        resolve: (payload: any) => payload,
        subscribe: () => {
            return pubsub.asyncIterator(`${APPEVENTS.BUY}`)
        },
    },

    portfolios: {
        resolve: (payload: any) => payload,
        subscribe: () => {
            setTimeout(() => {
                broker.getAllPositions();
            }, 2000); // Get all positions once subscribed
            return pubsub.asyncIterator(`${APPEVENTS.PORTFOLIOS}`)
        },
    }
})