import LocalizedStrings from 'react-native-localization';

const vn = {
    ok: "Đồng ý",
    cancel: "Hủy",
    confirm: "Xác nhận",
    back: "Quay lại",
    start: "Bắt đầu",
    pause: "Tạm dừng",
    resume: "Tiếp tục",
    stop: "Kết thúc",
    full_datetime_format: "dddd DD MMM, YYYY",
    
    // alert
    msg_action_deny: "Không thể thực hiện sự kiện này."
}

const en = {
    ok: "Ok",
    cancel: "Cancel",
    confirm: "Confirm",
    back: "Back",
    start: "Start",
    pause: "Pause",
    resume: "Resume",
    stop: "Stop",
    full_datetime_format: "dddd MMM DD, YYYY",

    //alert
    msg_action_deny: 'Unable to perform this action.',
}

export default new LocalizedStrings({
    'en': en,
    'vn': vn
})