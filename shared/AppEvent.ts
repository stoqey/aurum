import EventEmitter from 'events';

export enum APPEVENTS {

    BUY = 'BUY'

}

export class AppEvents extends EventEmitter.EventEmitter {
    private static _instance: AppEvents;

    public static get Instance() {
        return this._instance || (this._instance = new this());
    }

    private constructor() {
        super();
        // this.setMaxListeners(100); // set a maximum of 50 event listners
    }

}

