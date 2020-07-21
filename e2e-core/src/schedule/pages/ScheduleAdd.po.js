import ElementUtils from '../../shared/element-wrapper/ElementUtils';
import ButtonSpinner from '../../shared/element-wrapper/ButtonSpinner';

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
        ElementUtils.element('#end_year').selectByAttribute("value", endYearValue);

        return this;
    }

    /**
     * @param {string} endMonthValue
     * @returns {ScheduleAddPo}
     */
    selectEndMonth(endMonthValue) {
        ElementUtils.element('#end_month').selectByAttribute("value", endMonthValue);

        return this;
    }

    /**
     * @param {string} endDayValue
     * @returns {ScheduleAddPo}
     */
    selectEndDay(endDayValue) {
        ElementUtils.element('#end_day').selectByAttribute("value", endDayValue);

        return this;
    }

    /**
     * @param {string} endHourValue
     * @returns {ScheduleAddPo}
     */
    selectEndHour(endHourValue) {
        ElementUtils.element('#end_hour').selectByAttribute("value", endHourValue);

        return this;
    }

    /**
     * @param {string} endMinuteValue
     * @returns {ScheduleAddPo}
     */
    selectEndMinute(endMinuteValue) {
        ElementUtils.element('#end_minute').selectByVisibleText(
            endMinuteValue
        );

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
