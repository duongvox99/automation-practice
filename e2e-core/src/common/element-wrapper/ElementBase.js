import OperationPageException from '../exception/OperationPageException';

export default class ElementBase {
    /**
     * Parse the selector input string that runs on the Firefox browser
     * @param {string} selector - e.g: #address_given_name, [name=\'username\']...
     * @returns {string}
     */
    parseSelector(selector) {
        return selector;
    }

    /**
     * The function uses get element on the page of the page by gives a locator.
     * In case does not get that will be throw a exception
     * @param {string} selector
     * @param {int=} timeout
     * @param {boolean=} isWaitForVisible
     * @param {boolean=} isWaitingForPageReady
     * @returns {Object}
     */
    element(
        selector,
        timeout = 30000,
        isWaitForVisible = true,
        isWaitingForPageReady = false
    ) {
        try {
            if (isWaitForVisible) {
                $(selector).waitForDisplayed( timeout);
            }
            return $(selector);
        } catch (ex) {
            throw new OperationPageException({
                Status: 'Error',
                Class: 'BaseElement',
                Method: 'element',
                Exception: ex,
                Selector: selector,
            });
        }
    }

    /**
     * The function uses return the click action for browsers except Safari
     * in case you need to use elementIdClick API on Safari for some special cases
     * @param {string|Object} selector
     * @returns {*}
     */
    elementIdClick(selector) {
        return this.element(selector).click();
    }

    /**
     * The function uses get elements on the page of the page by gives a locator.
     * In case does not get that will be throw a exception
     * @param {string} selector
     * @param {int=} timeout
     * @param {boolean}isWaitingForPageReady
     * @returns {Object[]}
     */
    elements(selector, timeout = 30000, isWaitingForPageReady = false) {
        let isVisible = true;
        try {
            const resultSelector = this.parseSelector(selector);
            isVisible = this.isElementVisible(selector, timeout);
            if (isVisible) {
                return $$(resultSelector);
            }
            return [];
        } catch (ex) {
            throw new OperationPageException({
                Status: 'Error',
                Class: 'BaseElements',
                Method: 'elements',
                Exception: ex,
                Selector: selector,
            });
        }
    }

    /**
     * The function uses for getting the Visible status (true|false) gives by locator on the page
     * @param {string} selector
     * @param {int=} timeout
     * * @param {boolean=} isWaitingForPageReady
     * @returns {boolean}
     */
    isElementVisible(selector, timeout = 5000, isWaitingForPageReady = false) {
        try {
            const resultSelector = this.parseSelector(selector);
            $(resultSelector).waitForDisplayed(timeout);
        } catch (ex) {
            return false;
        }
        return true;
    }

    /**
     * @param {string} selector
     * @param {int=} timeout
     */
    waitForVisible(selector, timeout = 5000) {
        this.isElementVisible(selector, timeout);
    }

    /**
     * @param {string} selector
     * @param {int=} timeout
     */
    waitForInVisible(selector, timeout = 5000) {
        const resultSelector = this.parseSelector(selector);
        $(resultSelector).waitForDisplayed(timeout, true);
    }

    /**
     * Note that: This function only support Chrome browser so carefully when using this function
     * @param {string} locator
     * @param {int=} timeout
     * @param {string=} timeoutMsg
     */
    waitUntilElementDisappear(locator, timeout = 15000, timeoutMsg = '') {
        browser.waitUntil(
            () => {
                try {
                    const isVisible = $(this.parseSelector(locator)).isDisplayed();
                    if (!isVisible) {
                        return true;
                    }
                } catch (ex) {
                    // 'return false' will help the logic in 'try' is executed until timeout
                    return false;
                }
            },
            timeout,
            timeoutMsg
        );
    }

    /**
     *
     * @param {string} xpathInput
     */
    scrollIntoViewByXpath(xpathInput) {
        browser.execute(xpath => {
            const targetElement = document.evaluate(
                xpath,
                document,
                null,
                XPathResult.FIRST_ORDERED_NODE_TYPE,
                null
            ).singleNodeValue;

            if (targetElement && typeof targetElement !== 'undefined') {
                targetElement.scrollIntoView();
            }

            const headerElement = document.getElementById('header-wrap');
            if (headerElement && typeof headerElement !== 'undefined') {
                headerElement.style.position = 'relative';
            }
        }, xpathInput);
    }

    /**
     * This function is used for attach file
     * @param {string} selector e.g: '#file_upload_todo_add'
     * @param {string} filePath e.g: tests/end_to_end/common/resources/files/attachments_by_type/Photo01.jpg
     */
    attachFile(selector, filePath) {
        if (!filePath) {
            throw new TypeError(
                `BaseElement->attachFile: selector= ${selector}-filePath=${filePath} (No file was input for attachment)`
            );
        }

        try {
            const resultSelector = this.parseSelector(selector);
            $(resultSelector).waitForExist(15000);
            browser.uploadFile(filePath,resultSelector);
        } catch (ex) {
            throw new TypeError(`BaseElement->attachFile: ${filePath}\n ${ex}`);
        }
    }

    /**
     * The function is used for action on the checkbox element
     * Note that: This function has no name clearly so this function is deprecated. That will be removed in future
     * @param {string} selector
     * @param {boolean=} checked
     */
    selectCheckbox(selector, checked = true) {
        this.checkUnCheckCheckbox(selector, checked);
    }

    /**
     * The function is used for action on the checkbox element
     * @param {string} selector
     * @param {boolean} isChecked
     */
    checkUnCheckCheckbox(selector, isChecked) {
        const element = this.element(selector);
        if (element.isSelected() !== isChecked) {
            element.click();
        }
    }


    /**
     *
     * @param {string} selector
     * @returns {Object}
     * @private
     */
    _getElementSizeBySelector(selector) {
        const elementSizes = $(selector).getSize();
        let resultElementSize;

        if (Array.isArray(elementSizes) && elementSizes.length > 1) {
            resultElementSize = elementSizes[0];
        } else {
            resultElementSize = elementSizes;
        }

        return resultElementSize;
    }

    /**
     *
     * @param {string} selector
     * @returns {{x: number, y: number}}
     * @private
     */
    _getLocationByLocator(selector) {
        const elementLocations = $(selector).getLocation();
        let elementLocation;
        if (Array.isArray(elementLocations) && elementLocations.length > 1) {
            elementLocation = elementLocations[0];
        } else {
            elementLocation = elementLocations;
        }
        return elementLocation;
    }

    /**
     *
     * @param {string} selector
     * @returns {{x: number, y: number}}
     */
    getCoordinateBySelector(selector) {
        const domElementLocation = this._getLocationByLocator(selector);
        const domElementSize = this._getElementSizeBySelector(selector);
        const elementWidth = Math.round(domElementSize.width);
        const elementHeight = Math.round(domElementSize.height);
        const centerWidthElement =
            Math.round(domElementLocation.x) + Math.round(elementWidth / 2);
        const centerHeightElement =
            Math.round(domElementLocation.y) + Math.round(elementHeight / 2);

        const coordinate = {
            x: centerWidthElement,
            y: centerHeightElement,
        };

        return coordinate;
    }

    /**
     * waitForExist
     * @param selector
     * @param millisecond
     * @param reverse
     */
    waitForExist(selector, millisecond = 5000, reverse = false) {
        $(this.parseSelector(selector)).waitForExist(millisecond,reverse);
    }

    /**
     * isVisible reference is: http://webdriver.io/api/state/isVisible.html#Usage
     * note that:
     isVisible = browser.isDisplayed('#notInViewport');
     console.log(isVisible); // outputs: true

     isVisible = browser.isDisplayed('#zeroOpacity');
     console.log(isVisible); // outputs: true
     * @param {string} selector
     */
    isVisible(selector) {
        return $(this.parseSelector(selector)).isDisplayed();
    }

    /**
     *
     * @param {string} selector
     * @returns {ElementBase}
     */
    doubleClick(selector) {
        $(this.parseSelector(selector)).doubleClick();

        return this;
    }

    /**
     *
     * @param {string} selector
     * @returns {ElementBase}
     */
    moveTo(selector) {
        $(selector).moveTo();
        return this;
    }

    /**
     * isExisting
     * @param {string} selector
     */
    isExisting(selector) {//this.parseSelector()
        return $(selector).isExisting();
    }

    /**
     * pause
     * @param {Number} timeout
     */
    pause(timeout) {
        return browser.pause(timeout);
    }

    /**
     *
     * @param {Object} coordinates
     * @return {ElementBase}
     */
    doubleClickByCoordinates(coordinates) {
        return this;
    }
}
