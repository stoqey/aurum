import 'mocha';
import { InteractiveBrokers } from './IB.broker';

const ibBroker = new InteractiveBrokers();

describe('Interactive brokers', () => {

    it(`Fake trade `, (done) => {
        ibBroker.sub("onTrade", async (data: any) => {
            console.log('data is', data);
            done();
        });
    })

})