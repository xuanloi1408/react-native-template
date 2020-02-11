/**
 * Created by Cao Xuan Loi on 7/27/2019.
 */
export const toMoneyFormat = (money) => {
    if (!money) {
        return '0';
    }
    return money.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
};

export const isPhoneNumber = (phone) => {
    if (!phone) {
        return false;
    }
    var phoneRe = /((09|03|07|08|05)+([0-9]{8})\b)/g;
    var digits = phone.replace(/\D/g, '');
    return phoneRe.test(digits);

};

export const isNumber = (data): boolean => {
    if (!data) {
        return false;
    }
    return data.match(/^\d/);
};

export const toShortNumer = (data): string => {
    if (data < 1000) {
        return `${data}`;
    }

    if (data > 1000000000) {
        return `${(data / 1000000000.0).toFixed(2)} b`;
    }

    if (data > 1000000) {
        return `${(data / 1000000.0).toFixed(2)} m`;
    }

    if (data > 1000) {
        return `${(data / 1000.0).toFixed(2)} k`;
    }
};
