import NewAppointmentPart from './NewAppointment.part';
import PageNavigator from '../../shared/pages/PageNavigator';
import ElementUtils from '../../shared/element-wrapper/ElementUtils';

const SCHEDULE_INDEX_URL = 'schedule/index';
const APPOINTMENT_SUBJECT_LNK = '(//a[contains(., "%s")])[1]';

class ScheduleIndexPo extends NewAppointmentPart {
    /**
     * @returns {ScheduleIndexPo}
     */
    openPage() {
        PageNavigator.openPage(SCHEDULE_INDEX_URL);

        return this;
    }

    /**
     * @param {string} subject
     * @returns {ScheduleIndexPo}
     */
    clickOnAppointmentSubjectLnk(subject) {
       ElementUtils.element(
            sprintf(APPOINTMENT_SUBJECT_LNK, subject)
        ).click();

        return this;
    }
}

module.exports = new ScheduleIndexPo();
