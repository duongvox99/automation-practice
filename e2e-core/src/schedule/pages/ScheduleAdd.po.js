import ElementUtils from '../../common/element-wrapper/ElementUtils';
import ButtonSpinner from '../../common/element-wrapper/ButtonSpinner';

const APPOINTMENT_MENU_DDL = '//dl[contains(@class,"event_menu_grn")]/dt/a/span[2]';
const APPOINTMENT_MENU_VALUE = '//li[contains(@te,"%s")]';

class ScheduleAddPo {
    /**
     * @param {string} startYearValue
     * @returns {ScheduleAddPo}
     */
    selectStartYear(startYearValue) {
        ElementUtils.element('#start_year').selectByVisibleText(startYearValue);

        return this;
    }

    /**
     * @param {string} startMonthValue
     * @returns {ScheduleAddPo}
     */
    selectStartMonth(startMonthValue) {
        ElementUtils.element('#start_month').selectByAttribute("value", startMonthValue);

        return this;
    }

    /**
     * @param {string} startDayValue
     * @returns {ScheduleAddPo}
     */
    selectStartDay(startDayValue) {
        // TODO: implement body method

        return this;
    }

    /**
     * @param {string} startHourValue
     * @returns {ScheduleAddPo}
     */
    selectStartHour(startHourValue) {
        // TODO: implement body method

        return this;
    }

    /**
     * @param {string} startMinuteValue
     * @returns {ScheduleAddPo}
     */
    selectStartMinute(startMinuteValue) {
        // TODO: implement body method

        return this;
    }

    /**
     * @param {string} endYearValue
     * @returns {ScheduleAddPo}
     */
    selectEndYear(endYearValue) {
        // TODO: implement body method

        return this;
    }

    /**
     * @param {string} endMonthValue
     * @returns {ScheduleAddPo}
     */
    selectEndMonth(endMonthValue) {
        // TODO: implement body method

        return this;
    }

    /**
     * @param {string} endDayValue
     * @returns {ScheduleAddPo}
     */
    selectEndDay(endDayValue) {
        // TODO: implement body method

        return this;
    }

    /**
     * @param {string} endHourValue
     * @returns {ScheduleAddPo}
     */
    selectEndHour(endHourValue) {
        // TODO: implement body method

        return this;
    }

    /**
     * @param {string} endMinuteValue
     * @returns {ScheduleAddPo}
     */
    selectEndMinute(endMinuteValue) {
        // TODO: implement body method

        return this;
    }

    /**
     * @param {string} typeValue
     * @returns {ScheduleAddPo}
     */
    selectAppointmentMenu(typeValue) {
        browser.waitUntil(() => {
            return ElementUtils.isElementVisible('//dl[contains(@class,"event_menu_grn")]');
        });
        ElementUtils.element(APPOINTMENT_MENU_DDL).click();
        ElementUtils.element(sprintf(APPOINTMENT_MENU_VALUE, typeValue)).click();

        return this;
    }

    /**
     * @param {string} subject
     * @returns {ScheduleAddPo}
     */
    inputSubject(subject) {
        ElementUtils.element('//input[@name="title"]').setValue(subject);

        return this;
    }

    /**
     * @param {string} notesValue
     * @returns {ScheduleAddPo}
     */
    inputNotes(notesValue) {
        // TODO: implement body method

        return this;
    }

    /**
     *
     * @returns {ScheduleAddPo}
     */
    clickOnAddBtn() {
        try {
            ElementUtils.element('#schedule_submit_button').click();
            ButtonSpinner.waitButtonSpinnerDisappear('//*[contains(@class,"spinner_button1_grn")]');

            return this;
        } catch (ex) {
            if (ex.message.indexOf('still visible after') > -1) {
                browser.refresh();
            }
        }
    }
}

module.exports = new ScheduleAddPo();
