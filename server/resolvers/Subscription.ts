import { PubSub } from "apollo-server-express";

import { APPEVENTS } from "../../shared/AppEvent";

export const SubscriptionResolver = (pubsub: PubSub) => ({
    demo: {
        resolve: (payload: any) => payload,
        subscribe: () => {
            return pubsub.asyncIterator(`${APPEVENTS.BUY}`)
        },
    },

    portfolios: {
        resolve: (payload: any) => payload,
        subscribe: () => {
            return pubsub.asyncIterator(`${APPEVENTS.PORTFOLIOS}`)
        },
    }
})