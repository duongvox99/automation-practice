import ElementUtils from '../../../utils/element/ElementUtils';
import BookEntryModifyPage from './BookEntryModify';
import BookEntryDeletePage from './BookEntryDelete';

const TITLE_TXT = '//table[@class="view_table"]/tbody/tr[1]/td';
const COMPANY_NAME_TXT = '#company_name';
const DEPARTMENT_TXT = '#section_name';
const SUBJECT_DISPLAYED_TXT = '#subject';
const PRONUNCIATION_NAME_TXT = '#personal_sort_key';
const ROUTE_INFO_TXT = 'body #route';
const URL_TXT = '#url';
const POSITION_TXT = '#post_name';
const PERSONAL_PHONE_TXT = '#personal_telephone_number';
const EMAIL_TXT = '#email_address';
const NOTES_TXT = '#description';
const DELETE_BTN = '#lnk_delete';
const EDIT_LNK = '#address_modify';

class BookEntryView {
    /**
     * @returns {String}
     */
    getSubjectDisplay() {
        return ElementUtils.element(SUBJECT_DISPLAYED_TXT)
            .getText()
            .trim();
    }

    /**
     * @returns {string}
     */
    getTitle() {
        return ElementUtils.element(TITLE_TXT)
            .getText()
            .trim();
    }

    /**
     * @returns {String}
     */
    getPronunciationName() {
        return ElementUtils.element(PRONUNCIATION_NAME_TXT)
            .getText()
            .trim();
    }

    /**
     * @returns {Array}
     */
    getRouteSearchInfoValues() {
        const routeSearchContents = [];
        const allRouteInfoElements = ElementUtils.elements(ROUTE_INFO_TXT);
        for (let i = 0; i < allRouteInfoElements.length; i++) {
            routeSearchContents.push(allRouteInfoElements[i].getText());
        }

        return routeSearchContents;
    }

    /**
     * @returns {string}
     */
    getCompanyName() {
        return ElementUtils.element(COMPANY_NAME_TXT)
            .getText()
            .trim();
    }

    /**
     * @returns {string}
     */
    getDepartment() {
        return ElementUtils.element(DEPARTMENT_TXT)
            .getText()
            .trim();
    }

    /**
     * @returns {string}
     */
    getUrl() {
        return ElementUtils.element(URL_TXT)
            .getText()
            .trim();
    }

    /**
     * @returns {string}
     */
    getPosition() {
        return ElementUtils.element(POSITION_TXT)
            .getText()
            .trim();
    }

    /**
     * @returns {string}
     */
    getPersonalPhone() {
        return ElementUtils.element(PERSONAL_PHONE_TXT)
            .getText()
            .trim();
    }

    /**
     * @returns {string}
     */
    getEmail() {
        return ElementUtils.element(EMAIL_TXT)
            .getText()
            .trim();
    }

    /**
     * @returns {string}
     */
    getNotes() {
        return ElementUtils.element(NOTES_TXT)
            .getText()
            .trim();
    }

    /**
     * @returns {BookEntryDelete}
     */
    clickOnDeleteBtn() {
        ElementUtils.element(DELETE_BTN).click();
        return BookEntryDeletePage;
    }

    /**
     * @returns {BookEntryModify}
     */
    clickOnEditLnk() {
        ElementUtils.element(EDIT_LNK).click();
        return BookEntryModifyPage;
    }
}

module.exports = new BookEntryView();
