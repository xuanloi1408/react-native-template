import AppConfigs from "../../local/model/AppConfigs";
import IAction from "../../local/model/IAction";
import t from "./configs.types";
import { Action } from "redux";

export interface IConfigsState {
    //settings
    allow_notification: boolean
    notification_schedule_configs : number[]
    notification_schedule: number

    //flag
    first_open: boolean,
    is_rated: boolean,
    updated_fcm_token: boolean
    
    //data
    fcm_token: string
    app_configs: AppConfigs
}

const initialState: IConfigsState = {
    //settings
    allow_notification: true,
    notification_schedule_configs: [10, 15, 20, 30, 45, 60],
    notification_schedule: 0,

    //flag
    first_open: true,
    is_rated: false,
    updated_fcm_token: false,

    //data
    fcm_token: "",
    app_configs: new AppConfigs(),

}

export default (state: IConfigsState = initialState, action: Action<IAction>) => {
    const { type, payload } = action.type;
    switch (type) {
        case t.ON_RATED_APP:
            return {
                ...state,
                is_rated: true
            };

        case t.COUNT_OPEN_APP:
            return {
                ...state,
            };

        case t.FINISH_INTRO:
            return {
                ...state,
                first_open: false
            };

        case t.FETCHED_CONFIGS_SUCCESS:
            return {
                ...state,
                is_fetching: false,
                is_fetched: true,
                app_configs: payload.app_configs,
                monetization_configs: payload.monetization_configs
            };

        case t.UPDATE_CONFIGS: {
            return {
                ...state,
                ...payload
            };
        }

        case t.UPDATE_FCM_TOKEN: {
            return {
                ...state,
                fcm_token: payload
            };
        }

        case t.SEND_FCM_TOKEN_TO_SERVER: {
            return {
                ...state,
                is_send_fcm_token_to_server: payload
            }
        }

        default: {
            return state;
        }
    }
}
