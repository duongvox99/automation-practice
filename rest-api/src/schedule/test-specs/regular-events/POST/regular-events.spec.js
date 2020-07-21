import FactoryApi from '../../../../common/api/FactoryApi';
import AppIds from '../../../../../../e2e-core/src/shared/AppIds';

describe('POST schedule/events', () => {
    let scheduleApi;

    before('Load API', () => {
        scheduleApi = new FactoryApi(AppIds.SCHEDULE);
    });

    before('Load testing data', () => {

    });

    it('#restsh1 should create a public regular event successfully', () => {

    });
});
