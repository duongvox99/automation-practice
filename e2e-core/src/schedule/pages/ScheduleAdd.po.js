import ElementUtils from '../../shared/element-wrapper/ElementUtils';
import ButtonSpinner from '../../shared/element-wrapper/ButtonSpinner';

const APPOINTMENT_MENU_DDL = '//dl[contains(@class,"event_menu_grn")]/dt/a/span[2]';
const APPOINTMENT_MENU_VALUE = '//li[contains(@te,"%s")]';

class ScheduleAddPo {
    /**
     * @param {string} yearValue
     * @returns {ScheduleAddPo}
     */
    selectStartYear(yearValue) {
        ElementUtils.element('#start_year').selectByVisibleText(yearValue);

        return this;
    }

    /**
     * @param {string} monthValue
     * @returns {ScheduleAddPo}
     */
    selectStartMonth(monthValue) {
        ElementUtils.element('#start_month').selectByAttribute("value", monthValue);

        return this;
    }

    /**
     * @param {string} dayValue
     * @returns {ScheduleAddPo}
     */
    selectStartDay(dayValue) {
        // TODO: implement body method

        return this;
    }

    /**
     * @param {string} hourValue
     * @returns {ScheduleAddPo}
     */
    selectStartHour(hourValue) {
        // TODO: implement body method

        return this;
    }

    /**
     * @param {string} minuteValue
     * @returns {ScheduleAddPo}
     */
    selectStartMinute(minuteValue) {
        // TODO: implement body method

        return this;
    }

    /**
     * @param {string} yearValue
     * @returns {ScheduleAddPo}
     */
    selectEndYear(yearValue) {
        ElementUtils.element('#end_year').selectByAttribute("value", yearValue);

        return this;
    }

    /**
     * @param {string} monthValue
     * @returns {ScheduleAddPo}
     */
    selectEndMonth(monthValue) {
        ElementUtils.element('#end_month').selectByAttribute("value", monthValue);

        return this;
    }

    /**
     * @param {string} dayValue
     * @returns {ScheduleAddPo}
     */
    selectEndDay(dayValue) {
        ElementUtils.element('#end_day').selectByAttribute("value", dayValue);

        return this;
    }

    /**
     * @param {string} hourValue
     * @returns {ScheduleAddPo}
     */
    selectEndHour(hourValue) {
        ElementUtils.element('#end_hour').selectByAttribute("value", hourValue);

        return this;
    }

    /**
     * @param {string} minuteValue
     * @returns {ScheduleAddPo}
     */
    selectEndMinute(minuteValue) {
        ElementUtils.element('#end_minute').selectByVisibleText(
            minuteValue
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
