import {PubSub} from 'apollo-server-express';
import IbkrBroker from '@stoqey/aurum-broker-ibkr';
import {MilleBroker} from '@stoqey/aurum-broker-mille';
import {APPEVENTS} from '../../shared/AppEvent';

export const SubscriptionResolver = (pubsub: PubSub, broker: IbkrBroker | MilleBroker) => ({
    demo: {
        resolve: (payload: any) => payload,
        subscribe: () => {
            return pubsub.asyncIterator(`${APPEVENTS.BUY}`);
        },
    },

    portfolios: {
        resolve: (payload: any) => payload,
        subscribe: () => {
            setTimeout(() => {
                broker.getAllPositions();
            }, 2000); // Get all positions once subscribed
            return pubsub.asyncIterator(`${APPEVENTS.PORTFOLIOS}`);
        },
    },
});
