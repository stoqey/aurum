import bodyParser from 'body-parser';
import express from 'express';
import next from 'next';

import {apolloServerSetUp} from './apollo';

const dev = process.env.NODE_ENV !== 'production';
const app = next({dev});
const handle = app.getRequestHandler();

app.prepare()
    .then(() => {
        // Config
        const server = express();
        server.use(bodyParser.json());

        // 1. Add apollo server, WS and default next handler
        apolloServerSetUp(server, handle);
    })
    .catch((ex: {stack: any}) => {
        console.error(ex.stack);
        process.exit(1);
    });
