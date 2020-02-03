import AuthOnpremisePage from '../pages/AuthOnPremise.po';
import AuthCloudPage from '../pages/AuthCloud.po';
import ConfigParser from "../../common/ConfigParser";
import PageNavigator from "../../common/pages/PageNavigator";

let AuthPage;

export default class AuthenticatingGaroon {
    /**
     *
     * @param {object} accountData {username: string, password: string} accountData
     */
    constructor(accountData) {
        this._userName = accountData.username;
        this._password = accountData.password;

        if (!ConfigParser.isCloud()) {
            AuthPage = AuthOnpremisePage;
        } else {
            AuthPage = AuthCloudPage;
        }
    }

    /**
     *
     * @returns {AuthenticatingGaroon}
     */
    login() {
        let _userName = this._userName;
        let _password = this._password;

        if (!ConfigParser.isCloud()) {
            browser.url(PageNavigator.garoonRootUrl());
            if (!AuthPage.isLoginScreen()) {
                this.logOut();
            }
        } else if (!AuthPage.isLoginScreen()) {
            this.logoutByCommand();
        }
        AuthPage.login(_userName, _password);

        return this;
    }

    logoutByCommand() {
        browser.url(`${PageNavigator.rootUrl()}logout`);
        try {
            browser.waitUntil(() => {
                return AuthPage.isLoginScreen();
            }, 5000);
        } catch (e) {
            browser.url(`${PageNavigator.rootUrl()}login`);
        }

        return this;
    }
    /**
     *
     * @returns {AuthenticatingGaroon}
     */
    logOut() {
        if (ConfigParser.isCloud()) {
            return this.logoutByCommand();
        }
        AuthPage.logout();

        return this;
    }
}
