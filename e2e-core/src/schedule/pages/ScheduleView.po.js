import StringUtils from '../../common/StringUtils';
import ElementUtils from "../../common/element-wrapper/ElementUtils";

const SUBJECT_TXT = '//div[@id="event_list"]//h2';
const FACILITY_LNK = '//table[@class="viewTable-grn"]//span[@class="facility-grn"]/a';
const DATE_TIME_TXT = '//span[@class="schedule_text_noticeable_grn"]';
const REPEATS_TXT = '//span[@class="schedule_text_noticeable_grn"]/../../../tr[2]/td';
const NOTES_TXT = '//tr[th[text()="Notes"]]/td//pre[@class="format_contents"]';
const FILE_LNK = '//table[@class="viewTable-grn"]//a[.="%s"]';
const IMAGE_LNK = '//table[@class="viewTable-grn"]//a[contains(@href, "schedule/file_image_view")]/img[contains(@src, "%s")]';

class ScheduleViewPo {

    /**
     * @returns {string}
     */
    getSubject() {
        return ElementUtils.element(SUBJECT_TXT).getText();
    }

    /**
     * @returns {string} - The value like: Thu,May19,201617:09-17:09
     */
    getDateTime() {
        const datetime = ElementUtils.element(DATE_TIME_TXT).getText();

        return StringUtils.removeAllSpaces(datetime);
    }

    /**
     * @returns {string}
     */
    getRepeatInfo() {
        const repeatInfo = ElementUtils.element(REPEATS_TXT).getText();

        return StringUtils.removeAllSpaces(repeatInfo);
    }

    /**
     * @returns {Array}
     */
    getFacilityList() {
        const facilityElementList = ElementUtils.elements(FACILITY_LNK);
        const facilityList = [];
        facilityElementList.forEach(facility => {
            facilityList.push(facility.getText());
        });

        return facilityList;
    }


    /**
     * @returns {string}
     */
    getNotes() {
        // TODO: implement body method
    }

    /**
     * @param {string} fileName
     * @returns {boolean}
     */
    hasFile(fileName) {
        const attachmentLocator = sprintf(FILE_LNK, fileName);

        return ElementUtils.isElementVisible(attachmentLocator);
    }

    /**
     * @param {string} fileName
     * @returns {boolean}
     */
    hasImage(fileName) {
        const attachmentLocator = sprintf(IMAGE_LNK, fileName);

        return ElementUtils.isElementVisible(attachmentLocator);
    }

}

module.exports = new ScheduleViewPo();
