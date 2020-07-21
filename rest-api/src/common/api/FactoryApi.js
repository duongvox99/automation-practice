import ScheduleApi from '../../schedule/test-flows/ScheduleApi';
import AddressApi from '../../address/test-flows/AddressApi';
import AppIds from '../../../../e2e-core/src/shared/AppIds';

const DEFAULT_CREDENTIALS = {
    username: 'Administrator',
    password: 'cybozu',
};

export default class FactoryApi {
    /**
     *
     * @param {string} appId
     * @param {object=} credential - provide a credential if you want to use another account for sending a rest-api request
     * @returns {ScheduleApi}
     */
    constructor(
        appId,
        credential = DEFAULT_CREDENTIALS
    ) {
        let restApi;
        switch (appId) {
            case AppIds.ADDRESS:
                restApi = new AddressApi(credential);
                break;
            case AppIds.SCHEDULE:
                restApi = new ScheduleApi(credential);
                break;
            default:
                throw new Error(`The ${appId} specified does not exist`);
        }

        return restApi;
    }
}
