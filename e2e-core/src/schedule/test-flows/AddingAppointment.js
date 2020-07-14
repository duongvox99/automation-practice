import ScheduleIndexPage from '../pages/ScheduleIndex.po';
import ScheduleAddPage from '../pages/ScheduleAdd.po';
import ScheduleAddUserSelectPart from '../pages/UserSelect.part';

export default class AddingAppointment {
    /**
     * @constructor
     * @inheritDoc
     * @param {Object} appointmentInfo
     */
    constructor(appointmentInfo) {
        this._appointment = appointmentInfo;
    }

    /**
     * @returns {AddingAppointment}
     */
    addRegularAppointment() {
        // Step 1: Go to New appointment screen
        this.goToAddAppointmentPage();

        // Step 2: Fill detail appointment at add new appointment
        this._fillAppointmentDetail();

        // Step 3: Click on the Add button to add an appointment
        // ScheduleAddPage.clickOnAddBtn();

        return this;
    }

    /**
     *
     * @param {number} delayEachStep
     * @returns {AddingAppointment}
     * @private
     */
    _fillAppointmentDetail() {
        let schedulePage = ScheduleAddPage;

        // TODO: In the code below, the ordering of some actions is incorrect. They should follow the behavior of the feature.

        if (this._appointment.startDay) {
            schedulePage.selectStartDay(this._appointment.startDay);
        }

        if (this._appointment.startMonth) {
            schedulePage.selectStartMonth(this._appointment.startMonth);
        }

        if (this._appointment.startYear) {
            schedulePage.selectStartYear(this._appointment.startYear);
        }

        if (this._appointment.startHour) {
            schedulePage.selectStartHour(this._appointment.startHour);
        }

        if (this._appointment.startMinute) {
            schedulePage.selectStartMinute(this._appointment.startMinute);
        }

        if (this._appointment.endYear) {
            schedulePage.selectEndYear(this._appointment.endYear);
        }

        if (this._appointment.endMonth) {
            schedulePage.selectEndMonth(this._appointment.endMonth);
        }

        if (this._appointment.endDay) {
            schedulePage.selectEndDay(this._appointment.endDay);
        }


        if (this._appointment.endHour) {
            schedulePage.selectEndHour(this._appointment.endHour);
        }

        if (this._appointment.endMinute) {
            schedulePage.selectEndMinute(this._appointment.endMinute);
        }

        if (this._appointment.eventMenu) {
            ScheduleAddPage.selectAppointmentMenu(this._appointment.eventMenu);
        }

        if (this._appointment.subject) {
            schedulePage.inputSubject(this._appointment.subject);
        }

        if (this._appointment.notes) {
            schedulePage.inputNotes(this._appointment.notes);
        }
        return this;
    }

    /**
     * this method is provided for a specific test script
     * @param {string} userName
     * @returns {AddingAppointment}
     */
    selectUserByUserSearch(userName) {
        const userList = [userName];
        ScheduleAddUserSelectPart.setMembers(userList);

        return this;
    }

    /**
     * @returns {AddingAppointment}
     */
    goToAddAppointmentPage() {
        ScheduleIndexPage
            .openPage()
            .clickOnNewAppointmentLnk();

        return this;
    }

}
