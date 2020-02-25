import { BASE_URL } from '../common/Constants';
import AppError from '../local/model/AppError';
import { makeParams } from '../utils/ParamsUtil';
import IResponse from './model/IResponse';
import ServiceApi from './service.api';
export default class ConfigsApi extends ServiceApi {
    constructor() {
        super(`${BASE_URL}/notification`, {});
    }

    sendFcmToken(fcmToken: string): Promise<IResponse> {
        return new Promise((resolve, reject) => {
            const params = makeParams({ token: fcmToken });
            this.POST('/token', params).then(response => {
                const responseData = response.data;
                if (responseData.status !== 0) {
                    reject(new AppError(responseData.status, responseData.message));
                    return;
                }
                resolve(response.data);
            }).catch(error => {
                reject(new AppError(error.response.status, error.message));
            });
        });
    }

}



