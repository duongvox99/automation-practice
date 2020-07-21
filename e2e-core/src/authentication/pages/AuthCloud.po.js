import AuthBase from './AuthBase';
import ElementUtils from '../../shared/element-wrapper/ElementUtils';
import PageNavigator from "../../shared/pages/PageNavigator";
import BrowserUtils from "../../shared/browser-wrapper/BrowserUtils";

const USER_NAME_TXB = '//input[@name="username"]';
const PASSWORD_TXB = '//input[@name="password"]';
const LOGIN_BTN = '//*[@class="login-button"]';
const DISPLAY_USER_BTN = '//*[@id="cloudHeader-userName-grn"]';
const SIGN_OUT_LNK = '//*[@id="com-header-logout-link"]';
const USER_HEADER_LNK = '#cloudHeader-userName-grn';
const LOGIN_DIALOG_LOCATOR = '//*[@id="login-dialog"]';

class Auth extends AuthBase {
    /**
     * constructor
     */
    constructor() {
        super();
    }

    /**
     *
     * @returns {string}
     */
    usernameElement() {
        return USER_NAME_TXB;
    }

    passwordElement() {
        return PASSWORD_TXB;
    }

    /**
     *
     * @returns {string}
     */
    buttonElement() {
        return LOGIN_BTN;
    }

    /**
     *
     * @param {string} user
     * @returns {boolean}
     */
    isLoggedIn(user) {
        const selector = sprintf('//*[@id="header"]//span[@title="%s"]', user);

        return ElementUtils.isElementVisible(selector);
    }

    isLoginScreen() {
        return ElementUtils.isExisting(
            '//*[@id="login-form-outer"]//input[@name="username"]'
        );
    }

    /**
     *
     * @param {string} user
     * @param {string} password
     * @returns {Auth}
     */
    authenticateRequest(user, password) {
        try {
            ElementUtils.element(this.buttonElement()).click();
            ElementUtils.waitForInVisible(this.buttonElement());
            PageNavigator.openGaroonPage(''); // /g
        } catch (ex) {
            if (ex.message.indexOf('still visible after') > -1) {
                browser.refresh();
            }
        }
        return this;
    }

    /**
     *
     * @returns {Auth}
     */
    logout() {
        BrowserUtils.scrollToElement(USER_HEADER_LNK);
        browser.url(PageNavigator.garoonRootUrl());
        ElementUtils.element(DISPLAY_USER_BTN).click();
        ElementUtils.element(SIGN_OUT_LNK).click();

        ElementUtils.waitForExist(LOGIN_DIALOG_LOCATOR);


        // ElementUtils.element(BODY_LOCATOR).waitForText();

        return this;
    }
}

module.exports = new Auth();
