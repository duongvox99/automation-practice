import BrowserNames from '../BrowserNames';
import ChromeElementUtils from './ChromeElementUtils';

class ElementUtils {
    constructor() {
        this._elementUtilClass = this._createElementUtils();
    }

    _createElementUtils() {
        let elementUtilClass;
        switch (browser.capabilities.browserName) {
            case BrowserNames.CHROME:
            default:
                elementUtilClass = ChromeElementUtils;
                break;
        }

        return elementUtilClass;
    }

    /**
     * The function uses get element on the page of the page by gives a locator.
     * In case does not get that will be throw a exception
     * @param {string} selector
     * @param {int=} timeout
     * @param {boolean=} isWaiting
     * @param {boolean=} isWaitingForPageReady
     * @returns {Object}
     */
    element(selector, timeout = 30000, isWaiting = true, isWaitingForPageReady = true) {
        return this._elementUtilClass.element(
            selector,
            timeout,
            isWaiting,
            isWaitingForPageReady
        );
    }

    /**
     * The function uses to return the click action for browsers except Safari
     * in case you need to use elementIdClick API on Safari for some special cases
     * @param {string|Object} selector
     * @returns {*}
     */
    elementIdClick(selector) {
        return this._elementUtilClass.elementIdClick(selector);
    }

    /**
     *
     * @param selector
     * @param timeout
     * @param {boolean=} isWaitingForPageReady
     * @returns {Object[]}
     */
    elements(selector, timeout = 30000, isWaitingForPageReady = true) {
        const elementUtils = this._elementUtilClass;
        return elementUtils.elements(selector, timeout, isWaitingForPageReady);
    }

    /**
     *
     * @param selector
     * @param timeout
     * @returns {*|boolean}
     */
    isElementVisible(selector, timeout = 5000) {
        return this._elementUtilClass.isElementVisible(selector, timeout);
    }

    /**
     * @param {string} selector
     * @param {int=} timeout
     */
    waitForVisible(selector, timeout = 5000) {
        this._elementUtilClass.waitForVisible(selector, timeout);
    }

    /**
     * @param {string} selector
     * @param {int=} timeout
     */
    waitForInVisible(selector, timeout = 10000) {
        this._elementUtilClass.waitForInVisible(selector, timeout);
    }

    /**
     *
     * @param {string} locator
     * @param {int=} timeout
     * @param {string=} timeoutMsg
     */
    waitUntilElementDisappear(locator, timeout = 15000, timeoutMsg = '') {
        this._elementUtilClass.waitUntilElementDisappear(
            locator,
            timeout,
            timeoutMsg
        );
    }

    /**
     *
     * @param {string} xpathInput
     */
    scrollIntoViewByXpath(xpathInput) {
        this._elementUtilClass.scrollIntoViewByXpath(xpathInput);
    }

    /**
     * This function is used for attach file
     * @param {string} selector e.g: '#file_upload_todo_add'
     * @param {string} filePath e.g: tests/end_to_end/common/resources/files/attachments_by_type/Photo01.jpg
     */
    attachFile(selector, filePath) {
        this._elementUtilClass.attachFile(selector, filePath);
    }

    /**
     * The function is used for action on the checkbox element
     * Note that: This function has no name clearly so this function is deprecated. That will be removed in future
     * @param {string} selector
     * @param {boolean=} checked
     */
    selectCheckbox(selector, checked = true) {
        this._elementUtilClass.selectCheckbox(selector, checked);
    }

    /**
     * The function is used for action on the checkbox element
     * @param {string} selector
     * @param {boolean} isChecked
     */
    checkUnCheckCheckbox(selector, isChecked) {
        this._elementUtilClass.checkUnCheckCheckbox(selector, isChecked);
    }

    /**
     *
     * @param {string} selector
     * @returns {{x: number, y: number}}
     */
    getCoordinateBySelector(selector) {
        return this._elementUtilClass.getCoordinateBySelector(selector);
    }

    /**
     * waitForExist
     * @param selector
     * @param millisecond
     */
    waitForExist(selector, millisecond = 5000) {
        this._elementUtilClass.waitForExist(selector, millisecond, false);
    }

    /**
     * isVisible
     * @param selector
     * @returns {boolean}
     */
    isVisible(selector) {
        return this._elementUtilClass.isVisible(selector);
    }

    /**
     *  doubleClick
     * @param {string} selector
     * @returns {ElementUtils}
     */
    doubleClick(selector) {
        this._elementUtilClass.doubleClick(selector);
        return this;
    }

    /**
     *
     * @param {string} selector
     * @returns {ElementUtils}
     */
    moveTo(selector) {
        this._elementUtilClass.moveTo(selector);
        return this;
    }
    /**
     * isExisting
     * @param selector
     */
    isExisting(selector) {
        return this._elementUtilClass.isExisting(selector);
    }

    /**
     * pause
     * @param selector
     */
    pause(selector) {
        return this._elementUtilClass.pause(selector);
    }

    /**
     * @param {Object} coordinates
     * @returns {ElementUtils}
     */
    doubleClickByCoordinates(coordinates) {
        this._elementUtilClass.doubleClickByCoordinates(coordinates);

        return this;
    }
}
module.exports = new ElementUtils();
