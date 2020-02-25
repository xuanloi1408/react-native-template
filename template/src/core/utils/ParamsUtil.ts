
export const makeParams = (params) => ({
    ...params,
    ...extendParams,
});

export const jsonToQuery = (json) => {
    return '?' +
        Object.keys(json).map(function (key) {
            return encodeURIComponent(key) + '=' +
                encodeURIComponent(json[key]);
        }).join('&');
};

let extendParams = {};

export const addExtendParams = (params) => {
    extendParams = {
        ...extendParams,
        ...params,
    };
};
