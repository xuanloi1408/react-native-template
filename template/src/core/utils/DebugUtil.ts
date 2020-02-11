/* eslint-disable no-shadow */
export const debug = (str) => {
    if (__DEV__) {
        console.debug(str);
    }
};

export const error = (error) => {
    if (__DEV__) {
        console.error(error);
    }
};

export const DEBUG_API = true && __DEV__;
export const DEBUG_CHECK_IN = false && __DEV__;
export const DEBUG_INTERSTITIAL = false && __DEV__;
export const DEBUG_VIDEO = false && __DEV__;
export const DEBUG_DAILY = false && __DEV__;
