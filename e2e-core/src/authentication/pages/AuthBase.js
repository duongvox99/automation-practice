import ElementUtils from "../../shared/element-wrapper/ElementUtils";

export default class AuthBase {
    /**
     * constructor
     */
    constructor() {
        if (this.constructor === AuthBase) {
            throw new TypeError('Can not construct abstract class.');
        }

        if (this.usernameElement === AuthBase.prototype.usernameElement) {
            throw new TypeError('Please implement abstract method usernameElement.');
        }

        if (this.passwordElement === AuthBase.prototype.passwordElement) {
            throw new TypeError('Please implement abstract method passwordElement.');
        }

        if (this.buttonElement === AuthBase.prototype.buttonElement) {
            throw new TypeError('Please implement abstract method buttonElement.');
        }

        if (this.authenticateRequest === AuthBase.prototype.authenticateRequest) {
            throw new TypeError('Please implement abstract method authenticateRequest.');
        }

        if (this.logout === AuthBase.prototype.logout) {
            throw new TypeError('Please implement abstract method logout.');
        }
    }

    /**
     * usernameElement
     */
    usernameElement() {
        if (this === AuthBase) {
            throw new TypeError("Can't call static abstract class method usernameElement");
        } else if (this.usernameElement === AuthBase.usernameElement) {
            throw new TypeError('Please implement static abstract method usernameElement');
        } else {
            throw new TypeError("Don't call static abstract method usernameElement from child");
        }
    }

    /**
     * passwordElement
     */
    passwordElement() {
        if (this === AuthBase) {
            throw new TypeError("Can't call static abstract class method passwordElement");
        } else if (this.passwordElement === AuthBase.passwordElement) {
            throw new TypeError('Please implement static abstract method passwordElement');
        } else {
            throw new TypeError("Don't call static abstract method passwordElement from child");
        }
    }

    /**
     * buttonElement
     */
    buttonElement() {
        if (this === AuthBase) {
            throw new TypeError("Can't call static abstract class method buttonElement");
        } else if (this.buttonElement === AuthBase.prototype.buttonElement) {
            throw new TypeError('Please implement static abstract method buttonElement');
        } else {
            throw new TypeError("Don't call static abstract method buttonElement from child");
        }
    }

    /**
     *
     * @param {string} user
     * @param {string} pass
     */
    authenticateRequest(user, pass) {
        if (this === AuthBase) {
            throw new TypeError("Can't call static abstract class method authenticateRequest");
        } else if (this.authenticateRequest === AuthBase.prototype.authenticateRequest) {
            throw new TypeError('Please implement static abstract method authenticateRequest');
        } else {
            throw new TypeError("Don't call static abstract method authenticateRequest from child");
        }
    }

    /**
     * login
     * @param {String} user
     * @param {String} password
     * @returns {AuthBase}
     */
    login(user, password) {
        ElementUtils.element(this.usernameElement()).setValue(user);
        ElementUtils.element(this.passwordElement()).setValue(password);
        this.authenticateRequest(user, password);

        return this;
    }

    /**
     * logout
     */
    logout() {
        if (this === AuthBase) {
            throw new TypeError("Can't call static abstract class method logout");
        } else if (this.logout === AuthBase.prototype.logout) {
            throw new TypeError('Please implement static abstract method logout');
        } else {
            throw new TypeError("Don't call static abstract method logout from child");
        }
    }
}
