import ToastUtil from "./ToastUtil";
import Strings from "../common/Strings";
import AppError from './../local/model/AppError';
import { Alert } from "react-native";

export const ERROR_NETWORK = -1
export const ERROR_USERNAME_EMPTY = -2
export const ERROR_PASSWORD_EMPTY = -3
export const ERROR_FCM_TOKEN_NOT_YET = -4

const ERROR_METHOD_NOT_FOUND = 1
const ERROR_PARAMS_EXCEPTION = 2
const ERROR_ACTION_NOT_FOUND = 3
const ERROR_ACTION_EXCEPTION = 4

const ErrorUtil = {
    withCode(code: number): string {
        switch (code) {
            //common
            case ERROR_NETWORK:
                return Strings.error_network;

            case ERROR_METHOD_NOT_FOUND:
            case ERROR_PARAMS_EXCEPTION:
            case ERROR_ACTION_NOT_FOUND:
            case ERROR_ACTION_EXCEPTION:
                return Strings.error_common;

            case ERROR_USERNAME_EMPTY:
                return Strings.error_username_empty;
            case ERROR_PASSWORD_EMPTY:
                return Strings.error_password_empty;
            case ERROR_FCM_TOKEN_NOT_YET:
                return Strings.error_fcm_token_not_yet;
        }
    },

    showError(title: string, body: string) {
        Alert.alert(title, body,
            [
                { text: 'Đóng', onPress: () => console.log('Ask me later pressed'), style: 'cancel' }
            ],
            { cancelable: false },
        );
    },

    showAlert(title: string, body: string, onPress: any) {
        Alert.alert(title, body,
            [
                { text: 'Đóng', onPress: () => onPress() }
            ],
            { cancelable: false },
        );
    }
}

export default ErrorUtil
