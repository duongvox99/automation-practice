import ElementUtils from '../../../utils/element/ElementUtils';
import SafariElementUtils from '../../../utils/element/SafariElementUtils';
import Browser from '../../../common/Browser';
import BookEntryViewPage from './BookEntryView';

const BOOK_ENTRY_NAME_TXB = '#address_family_name';
const FIRST_NAME_TXB = '#address_given_name';
const ARRIVAL_STATION_TXB = '//input[contains(@name,"to")]';
const DEPARTURE_STATION_TXB = '//input[contains(@name,"from")]';
const ROUTE_SEARCH_BTN =
    '//*[@id="js_route_search"]/tbody/tr/td[2]/span/a/span';
const SEARCH_BTN = '//button[@class="button form-search-button"]';
const ROUTE_SELECTED_BTN =
    '//button[@class="button route-summary-head-button"]';
const ROUTE_SEARCH_IFR = '//*[@id="window_content"]/div/iframe';
const COMPANY_TXB = '//input[@name="company_name"]';
const DEPARTMENT_NAME_TXB = '//input[@name="section_name"]';
const URL_TXB = '//input[@name="url"]';
const POSITION_TXB = '//input[@name="post_name"]';
const PERSONAL_PHONE_TXB = '//input[@name="personal_telephone_number"]';
const EMAIL_TXB = '//input[@name="email_address"]';
const NOTES_TXB = '#textarea_id';
const PICTURE_FUL = '//input[@name="image"]';
const ADD_BTN = '#address_book_button_add';
const PRONUNCIATION_NAME_TXB = '#address_given_sort_key';

class BookEntryAdd {
    /**
     * @param {String} lastName
     * @returns {BookEntryAdd}
     */
    inputLastName(lastName) {
        ElementUtils.element(BOOK_ENTRY_NAME_TXB).setValue(lastName);
        return this;
    }

    /**
     * @param {String} firstName
     * @returns {BookEntryAdd}
     */
    inputFirstName(firstName) {
        ElementUtils.element(FIRST_NAME_TXB).setValue(firstName);
        return this;
    }

    /**
     * @param {String} companyName
     * @returns {BookEntryAdd}
     */
    inputCompanyName(companyName) {
        ElementUtils.element(COMPANY_TXB).setValue(companyName);
        return this;
    }

    /**
     * @param {String} department
     * @returns {BookEntryAdd}
     */
    inputDepartment(department) {
        ElementUtils.element(DEPARTMENT_NAME_TXB).setValue(department);
        return this;
    }

    /**
     * @param {String} url
     * @returns {BookEntryAdd}
     */
    inputUrl(url) {
        ElementUtils.element(URL_TXB).setValue(url);
        return this;
    }

    /**
     * @param {String} position
     * @returns {BookEntryAdd}
     */
    inputPosition(position) {
        ElementUtils.element(POSITION_TXB).setValue(position);
        return this;
    }

    /**
     * @param {String} personalPhone
     * @returns {BookEntryAdd}
     */
    inputPersonalPhone(personalPhone) {
        ElementUtils.element(PERSONAL_PHONE_TXB).setValue(personalPhone);
        return this;
    }

    /**
     * @param {String} email
     * @returns {BookEntryAdd}
     */
    inputEmail(email) {
        ElementUtils.element(EMAIL_TXB).setValue(email);
        return this;
    }

    /**
     * @param {String} notes
     * @returns {BookEntryAdd}
     */
    inputNotes(notes) {
        ElementUtils.element(NOTES_TXB).setValue(notes);
        return this;
    }

    /**
     * @param {String} picturePath
     * @returns {BookEntryAdd}
     */
    attachPicture(picturePath) {
        ElementUtils.attachFile(PICTURE_FUL, picturePath);
        return this;
    }

    /**
     * @param {String} departureStation
     * @returns {BookEntryAdd}
     */
    inputDepartureStation(departureStation) {
        browser.switchToFrame(ElementUtils.element(ROUTE_SEARCH_IFR).value);
        ElementUtils.element(DEPARTURE_STATION_TXB).setValue(departureStation);
        return this;
    }

    /**
     * @param {String} arrivalStation
     * @returns {BookEntryAdd}
     */
    inputArrivalStation(arrivalStation) {
        ElementUtils.element(ARRIVAL_STATION_TXB).setValue(arrivalStation);
        return this;
    }

    /**
     * @returns {BookEntryAdd}
     */
    clickOnRouteSearchBtn() {
        ElementUtils.element(ROUTE_SEARCH_BTN).click();
        return this;
    }

    /**
     * @returns {BookEntryAdd}
     */
    clickOnSearchBtn() {
        ElementUtils.element(SEARCH_BTN).click();
        return this;
    }

    /**
     * @returns {BookEntryAdd}
     */
    clickOnSelectedRouteBtn() {
        ElementUtils.waitForVisible(SEARCH_BTN);
        ElementUtils.element(ROUTE_SELECTED_BTN).click();
        browser.switchToParentFrame();
        return this;
    }

    /**
     * @returns {BookEntryView}
     */
    clickOnAddBtn() {
        ElementUtils.element(ADD_BTN).click();
        return BookEntryViewPage;
    }

    /**
     * @returns {BookEntryAdd}
     */
    clickOnNamePronunciationTXB() {
        ElementUtils.elementIdClick(PRONUNCIATION_NAME_TXB);
        return this;
    }
}

module.exports = new BookEntryAdd();
