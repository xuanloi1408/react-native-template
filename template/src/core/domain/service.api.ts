import axios, { AxiosPromise } from 'axios';
import { debug } from '../utils/DebugUtil';
var qs = require('qs');

export default class ServiceApi {
    static routes = [];

    baseUrl: string
    headers: any

    constructor(baseUrl = '', headers = {}) {
        this.baseUrl = baseUrl;
        this.headers = {
            ...headers,
        };
    }

    injectHeader(header = {}) {
        this.headers = {
            ...this.headers,
            ...header,
        };
    }

    fetch(path, method, data, isQuery): AxiosPromise {
        let route = `${this.baseUrl}${path}`;
        if (isQuery && data) {
            const query = qs.stringify(data);
            route = `${route}?${query}`;
            data = undefined;
        }
        let options = {
            method,
            timeout: 15000,
            url: route,
            headers: this.headers,
        };
        if (data) {
            if (data instanceof FormData) {
                Object.assign(options, { data: data });
            } else {
                Object.assign(options, { data: data });
            }
        }
        debug('service.api.ts < Line: 43 > ===> ' + JSON.stringify(options));
        return axios(options);
    }

    GET(route, query?): AxiosPromise {
        return this.fetch(route, 'GET', query, true);
    }

    POST(route, body?): AxiosPromise {
        return this.fetch(route, 'POST', body, false);
    }
}
