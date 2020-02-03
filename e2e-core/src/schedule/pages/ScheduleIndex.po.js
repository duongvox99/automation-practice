import ScheduleViewPage from './ScheduleView.po';
import NewAppointmentPart from './NewAppointment.part';
import PageNavigator from '../../common/pages/PageNavigator';
import ElementUtils from '../../common/element-wrapper/ElementUtils';

const SCHEDULE_INDEX_URL = 'schedule/index';
const APPOINTMENT_SUBJECT_LNK = '(//a[contains(., "%s")])[1]';

class ScheduleIndexPo extends NewAppointmentPart {
    /**
     * @constructor
     * @inheritDoc
     * @see NewAppointmentPart
     */
    constructor() {
        super();
    }

    /**
     * @returns {ScheduleIndexPo}
     */
    openPage() {
        PageNavigator.openPage(SCHEDULE_INDEX_URL);

        return this;
    }

    /**
     * @param {string} subject
     * @returns {ScheduleView}
     */
    clickOnAppointmentSubjectLnk(subject) {
        const element = ElementUtils.element(
            sprintf(APPOINTMENT_SUBJECT_LNK, subject)
        );
        const url = element.getAttribute('href');
        browser.url(url);

        return ScheduleViewPage;
    }
}

module.exports = new ScheduleIndexPo();
