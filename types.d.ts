
declare module '@rebass/preset';
declare module '@rebass/forms';

declare namespace NodeJS {
    interface Process {
        readonly browser: boolean
    }

}