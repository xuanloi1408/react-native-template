import types from "./toast.types";
import { Action } from "redux";
import IAction from "src/core/local/model/IAction";
import Toast from "src/core/local/model/Toast";


export interface IToastState {
    //settings
    list: Toast[]
}

const initialState = {
    list: []
}

const reducer = (state: IToastState = initialState, action: Action<IAction>) => {
    const { type, payload } = action.type;
    const { list } = state;
    switch (type) {
        case types.ADD_TOAST: {
            return {
                ...state,
                list: list.some((toast: Toast) => toast.msg === payload.msg) ? list : [payload, ...list],
            };
        }
        case types.REMOVE_TOAST: {
            return {
                ...state,
                list: list.filter((msg: Toast) => msg.key !== payload.key),
            };
        }
        default: {
            return state;
        }
    }
};
export default reducer
