import isEmpty from "lodash/isEmpty";

// import { APPEVENTS, AppEvents } from "../../shared/AppEvent";

export const QueryResolver = {
demo: (_: any, args: any): boolean => {
        const input: any = args && args.input;
        // console.log('args to runAlgo', input);
        if (!isEmpty(input)) {
            // AppEvents.Instance.emit(APPEVENTS.RUN_ALGO, input);
            return true;
        }
        return false;
    }
}