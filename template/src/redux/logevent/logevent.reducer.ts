import LogEvent from "src/local/model/log_event";
import { Action } from "redux";
import IAction from "src/core/local/model/IAction";
import t from './logevent.types'

export interface ILogEventState {
    list: LogEvent[]
}

const initialState: ILogEventState = {
    list: []
}

export default (state: ILogEventState = initialState, action: Action<IAction>) => {
    const { type, payload } = action.type;

    switch (type) {
        case t.ADD_LOGEVENT:
            return {
                list: [...state.list, payload]
            };
    }
}
