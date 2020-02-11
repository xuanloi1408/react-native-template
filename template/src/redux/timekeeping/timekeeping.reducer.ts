import Timekeeping from "src/local/model/timekeeping";
import { Action } from "redux";
import IAction from "src/core/local/model/IAction";
import t from './timekeeping.types'

export interface ITimekeepingState {
    list: Timekeeping[]
    current: Timekeeping
}

const initialState: ITimekeepingState = {
    list: [],
    current: new Timekeeping()
}

export default (state: ITimekeepingState = initialState, action: Action<IAction>) => {
    const { type, payload } = action.type;

    switch (type) {
        case t.ADD_TIMEKEEPING:
            return {
                ...state,
                list: [...state.list, payload]
            };
        case t.UPDATE_STATUS_TIMEKEEPING:
            return {
                ...state,
                current: payload
            }
        default: 
            return state
    }
}
