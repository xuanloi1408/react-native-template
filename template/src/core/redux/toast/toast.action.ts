import types from "./toast.types";

const actions = {
    addToast: (msg, duration, key) => {
        return {type: types.ADD_TOAST, payload: {msg, duration, key}};
    },
    removeToast: (key) => {
        return {type: types.REMOVE_TOAST, payload: {key}};
    },
}
export default actions
