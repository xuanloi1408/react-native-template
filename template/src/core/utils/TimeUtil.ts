const TIME_MINUTES = 60 * 1000;
const TIME_HOURS = 60 * TIME_MINUTES;
const TIME_DAY = 24 * TIME_HOURS;
import _Timer from 'react-timer-mixin';

export const Timer = _Timer;

export const humanTime = (time): string => {
    if (!time) {
        let dateTime = new Date();
        return `${dateTime.getHours()}: ${dateTime.getMinutes()} ${dateTime.getDate()}/${dateTime.getMonth() + 1}/${dateTime.getFullYear()}`;
    }
    let rateTime = new Date().getTime() - (time * 1000);
    let strRateTime = '';
    if (rateTime < TIME_DAY) {
        let rateHours: number = Math.floor(rateTime / TIME_HOURS);
        let rateMinutes = Math.floor(rateTime / TIME_MINUTES);
        if (rateHours >= 1) {
            strRateTime = `${rateHours} giờ trước`;
        } else if (rateMinutes > 0) {
            strRateTime = rateMinutes + ' phút trước';
        } else {
            strRateTime = 'Vừa mới đây';
        }
    } else {
        let dateTime = new Date(time * 1000);
        strRateTime = `${dateTime.getHours()}: ${dateTime.getMinutes()} ${dateTime.getDate()}/${dateTime.getMonth() + 1}/${dateTime.getFullYear()}`;
    }

    return strRateTime;
};

export const toVnTime = (dateTime) => {
    return `${dateTime.getHours()}:${dateTime.getMinutes()}:${dateTime.getSeconds()}  ${dateTime.getDate()}/${dateTime.getMonth() + 1}/${dateTime.getFullYear()}`;
};


export const toDateString = (date) => {
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
}

export const countTime = (time: number): string => {
    let strTime = '';
    const hours = parseInt('' + time / 3600000, 10);
    if (hours >= 10) {
        strTime = '' + hours + ':';
    } else if (hours >= 1) {
        strTime = '0' + hours + ':';
    } else {
        strTime = '00:';
    }

    const minutes = parseInt('' + ((time - hours * 3600000) / 60000), 10);
    if (minutes >= 10) {
        strTime += '' + minutes + ':';
    } else if (minutes >= 1) {
        strTime += '0' + minutes + ':';
    } else {
        strTime += '00:';
    }

    const seconds = parseInt('' + ((time - hours * 3600000 - minutes * 60000) / 1000), 10);
    if (seconds >= 10) {
        strTime += '' + seconds;
    } else if (seconds >= 1) {
        strTime += '0' + seconds;
    } else {
        strTime += '00';
    }

    return strTime;
};
