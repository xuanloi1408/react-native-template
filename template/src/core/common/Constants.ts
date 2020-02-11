import { Platform } from 'react-native';
import { DEBUG_API } from '../utils/DebugUtil';

export const BASE_URL = DEBUG_API ? 'http://api.doppelherz.vn' : 'http://api.doppelherz.vn';

export const ITEMS_PER_PAGE = 20;

export const INIT_PAGE = 1;

export const EmitCode = {
    Toast: 'toast',
};

export const LaborActions = {
    NONE: -1,
    START: 1,
    PAUSE: 2,
    RESUME: 3,
    STOP: 0
};

export const LaborStates = {
    STANDING: 0,
    WORKING: 1,
    PAUSING: 2,
    DONE: 3
};

export const ImagePosition = {
    BEFORE: 0,
    AFTER: 1,
};


export const ShipTypes = {
    SHIPING: 1,
    RECEIVED_AT_STORE: 2,
};

export const PaymentTypes = {
    COD: 1,
    CBF: 2,
};

export const SERVICES = {
    WAITING: 0,
    IN_PROCESS: 1,
    TAKE_CARE: 'takecare',
    DRYING: 'drying',
    RECOVERY: 'recovery',
    FINISH: 'finish',
};

export const SERVICES_PROCESS = {
    TAKECARE: 0,
    DRYING: 2,
    RECOVERY: 3,
};

export const SERVICES_STATUS = {
    WAITING: 0,
    IN_PROCESS: 1,
    FINISH: 2,
};

export const UploadState = {
    None: 0,
    Start: 1,
    Uploading: 2,
    Done: 3,
    Error: 4,
    ServerError: 5,
};

export const NotificationActions = {
    ACTION_CREATED_SHIPPING: 'com.laccino.fcm.ACTION_CREATED_SHIPPING',
    ACTION_CREATED_SERVICE: 'com.laccino.fcm.ACTION_CREATED_SERVICE',
    ACTION_PACKED: 'com.laccino.fcm.ACTION_PACKED',
    ACTION_TO_SHIPPER: 'com.laccino.fcm.ACTION_TO_SHIPPER',
    ACTION_TO_RECEIVE: 'com.laccino.fcm.ACTION_TO_RECEIVE',
    ACTION_COMPLETED: 'com.laccino.fcm.ACTION_COMPLETED',
    ACTION_CUSTOMER_RATING: 'com.laccino.fcm.ACTION_CUSTOMER_RATING',
};

export const URL_TERMS_OF_SERVICES = __DEV__ ? 'http://172.16.2.2:5000/terms_of_services' : 'https://h2t-online.web.app/terms_of_services';

export const FONT_NAME_REGULAR = Platform.OS === 'ios' ? 'Averta-Regular' : 'Averta';

export const FONT_NAME_BOLD = Platform.OS === 'ios' ? 'Averta-Bold' : 'AvertaBold';

export const REQUEST_TIME_OUT = 10000;
