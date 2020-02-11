import AppNavigator from "src/navigation/Router";
import { createNavigationReducer } from "react-navigation-redux-helpers";
import { AsyncStorage } from "react-native";
import { persistCombineReducers } from 'redux-persist';

import configsReducer from 'src/core/redux/configs/configs.reducer';
import toastReducer from 'src/core/redux/toast/toast.reducer';
import timekeepingReducer from './timekeeping/timekeeping.reducer';
import logeventReducer from './logevent/logevent.reducer';

const navReducer = createNavigationReducer(AppNavigator);

const configs = {
    key: 'goodkid',
    storage: AsyncStorage,
    blacklist: ['nav', 'address'],
};

const reducers = persistCombineReducers(configs, {
    nav: navReducer,
    configs: configsReducer,
    toast: toastReducer,
    timekeeping: timekeepingReducer,
    logevent: logeventReducer

});

export default reducers;
