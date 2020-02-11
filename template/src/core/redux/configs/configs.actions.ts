import { debug } from 'src/core/utils/DebugUtil';
import t from './configs.types';
import firebase from 'react-native-firebase'

export const finish_intro = () => ({ type: t.FINISH_INTRO });

export const _on_fetch_configs_error = (error) => ({ type: t.FETCHED_CONFIGS_ERROR, error });

export const _update_count_app_open = () => ({ type: t.COUNT_OPEN_APP });

export const _update_rated_app = () => ({ type: t.ON_RATED_APP });

export const _update_fcm_token = (payload: string) => ({ type: t.UPDATE_FCM_TOKEN, payload });

export const _send_fcm_token_to_server = (payload: boolean) => ({ type: t.SEND_FCM_TOKEN_TO_SERVER, payload });


export const onAppOpen = () => {
    return (dispatch) => {
        dispatch(_update_count_app_open());
    };
};

export const onAppRated = () => {
    return (dispatch) => {
        dispatch(_update_rated_app());
    };
};

export const initFcmToken = () => {
    return (dispatch, getState) => {
        const { configs } = getState();
        firebase.messaging().getToken()
            .then(fcmToken => {
                if (fcmToken) {
                    debug('configs.actions.ts < Line: 50 > ===> ' + fcmToken);
                    // user has a device token
                    if (configs.fcm_token === fcmToken && configs.is_send_fcm_token_to_server) {
                        // đã gửi token to server! Không cần update
                        return;
                    }
                    dispatch(_update_fcm_token(fcmToken));
                    //TODO

                } else {
                    // user doesn't have a device token yet
                    dispatch(_send_fcm_token_to_server(false));
                }
            });
    };
};
