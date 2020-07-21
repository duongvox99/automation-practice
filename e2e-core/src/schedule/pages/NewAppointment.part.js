import ElementUtils from '../../shared/element-wrapper/ElementUtils';
const NEW_APPOINTMENT_LNK = '//div[@id="smart_main_menu_part"]/span/a[contains(@href, "schedule/add")]';

export default class NewAppointmentPart {
    /**
     *
     * @returns {NewAppointmentPart}
     */
    clickOnNewAppointmentLnk() {
        ElementUtils.waitForVisible(NEW_APPOINTMENT_LNK, 3000);
        ElementUtils.element(NEW_APPOINTMENT_LNK).click();

        return this;
    }
}
