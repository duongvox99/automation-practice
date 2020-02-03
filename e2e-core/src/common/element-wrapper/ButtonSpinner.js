import ElementUtils from './ElementUtils';

export default class ButtonSpinner {
    /**
     * The method is used for waiting the spinner icon disappear after click on the submit button
     * @param {string=} spinner_locator
     * @param {int=} timeout
     */
    static waitButtonSpinnerDisappear(spinner_locator = '.spinner_button1_grn', timeout = 15000) {
        ElementUtils.waitForInVisible(spinner_locator, timeout);
    }
}
