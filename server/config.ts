import os from 'os';

export const isDev = process.env.NODE_ENV === 'development';

if (isDev) {
    require('dotenv').config();
}

const { env } = process;

export const HOSTNAME = os.hostname();
export const finnHubKey = env.FINNHUB_KEY || '';

/***
 * Aurum server env
 */
export const PORT = env.PORT || 3008;
export const appName = env.APP_NAME || 'AURUM:SERVER';

/**
 * External algo server env
 */
export const algoServerHost = `http://${env.ALGO_SERVER_SERVICE_HOST || 'localhost'}`;
export const algoServerPort = env.ALGO_SERVER_SERVICE_PORT || 3001;

/**
 * Interactive brokers
 */

export const IB_PORT: number = +(isDev ? (env.IB_PORT || 7497) : 4003);
export const IB_HOST: string = isDev ? (env.IB_HOST || '127.0.0.1') : env.IBKR_SERVICE_HOST || "";
