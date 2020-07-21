import AuthBase from './AuthBase';
import PageNavigator from "../../shared/pages/PageNavigator";
import ElementUtils from "../../shared/element-wrapper/ElementUtils";

const USER_NAME_TXB = '[name="_account"]';
const PASSWORD_TXB = '[name="_password"]';

// The locator for sign-out
const DISPLAY_USER_LOCATOR = '#cloudHeader-userName-grn';
const SIGN_OUT_LOCATOR = '#com-header-logout-link';
const HEADER_LOGO_LNK = '.cloudHeader-logo-grn';

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

    /**
     *
     * @returns {string}
     */
    passwordElement() {
        return PASSWORD_TXB;
    }

    /**
     *
     * @returns {string}
     */
    buttonElement() {
        return '.login_margin';
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

    /**
     * @returns {boolean}
     */
    isLoginScreen() {
        return ElementUtils.isExisting(
            '//*[@id="action"]//input[@name="_account"]'
        );
    }

    /**
     *
     * @param {string} user
     * @param {string} password
     * @returns {Auth}
     */
    authenticateRequest(user, password) {
        ElementUtils.element(this.buttonElement()).click();
        ElementUtils.element(HEADER_LOGO_LNK).click();
        return this;
    }

    /**
     *
     * @returns {Auth}
     */
    logout() {
        browser.url(PageNavigator.garoonRootUrl());
        ElementUtils.element(DISPLAY_USER_LOCATOR).click();
        ElementUtils.element(SIGN_OUT_LOCATOR).click();

        return this;
    }
}

module.exports = new Auth();
