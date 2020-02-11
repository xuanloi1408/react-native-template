import _EventEmitter from 'react-native/Libraries/vendor/emitter/EventEmitter';
import {EmitCode} from "../common/Constants";

export const DEFAULT_DURATION = 3000;

export const EventEmitter = new _EventEmitter();

const ToastUtil = {
    showToast: (msg, duration = DEFAULT_DURATION) => EventEmitter.emit(EmitCode.Toast, msg, duration)
}
export default ToastUtil
