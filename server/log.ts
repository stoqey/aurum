import debug from 'debug';

const appPrefix = 'aurum';

/**
 * Use to log in general case
 */
export const log = debug(`${appPrefix}:info`);

/**
 * Use for verbose log
 */
export const verbose = debug(`${appPrefix}:verbose`);
