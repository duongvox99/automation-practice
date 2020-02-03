import ElementUtils from "../element-wrapper/ElementBase";

export default class UserSelectBasePart {
    /**
     * constructor
     */
    constructor() {
        if (this.constructor === UserSelectBasePart) {
            throw new TypeError('Can not construct abstract class');
        }
        if (
            this.userInputSearchSelector ===
            UserSelectBasePart.prototype.userInputSearchSelector
        ) {
            throw new TypeError(
                'Please implement abstract method userInputSearchSelector.'
            );
        }
        if (
            this.userSearchCommandSelector ===
            UserSelectBasePart.prototype.userSearchCommandSelector
        ) {
            throw new TypeError(
                'Please implement abstract method userSearchCommandSelector.'
            );
        }
        if (
            this.userSearchSpinnerSelector ===
            UserSelectBasePart.prototype.userSearchSpinnerSelector
        ) {
            throw new TypeError(
                'Please implement abstract method userSearchSpinnerSelector'
            );
        }
        if (
            this.memberSelectSelector ===
            UserSelectBasePart.prototype.memberSelectSelector
        ) {
            throw new TypeError(
                'Please implement abstract method memberSelectSelector'
            );
        }
        if (
            this.addSelectedButtonSelector ===
            UserSelectBasePart.prototype.addSelectedButtonSelector
        ) {
            throw new TypeError(
                'Please implement abstract method addSelectedButtonSelector'
            );
        }
    }

    userInputSearchSelector() {
        if (this === UserSelectBasePart) {
            throw new TypeError(
                "Can't call static abstract class method userInputSearchSelector"
            );
        } else if (
            this.userInputSearchSelector ===
            UserSelectBasePart.prototype.userInputSearchSelector
        ) {
            throw new TypeError(
                'Please implement static abstract method userInputSearchSelector'
            );
        } else {
            throw new TypeError(
                "Don't call static abstract method userInputSearchSelector from child"
            );
        }
    }

    userSearchCommandSelector() {
        if (this === UserSelectBasePart) {
            throw new TypeError(
                "Can't call static abstract class method userSearchCommandSelector"
            );
        } else if (
            this.userSearchCommandSelector ===
            UserSelectBasePart.prototype.userSearchCommandSelector
        ) {
            throw new TypeError(
                'Please implement static abstract method userSearchCommandSelector'
            );
        } else {
            throw new TypeError(
                "Don't call static abstract method userSearchCommandSelector from child"
            );
        }
    }

    userSearchSpinnerSelector() {
        if (this === UserSelectBasePart) {
            throw new TypeError(
                "Can't call static abstract class method userSearchSpinnerSelector"
            );
        } else if (
            this.userSearchSpinnerSelector ===
            UserSelectBasePart.prototype.userSearchSpinnerSelector
        ) {
            throw new TypeError(
                'Please implement static abstract method userSearchSpinnerSelector'
            );
        } else {
            throw new TypeError(
                "Don't call static abstract method userSearchSpinnerSelector from child"
            );
        }
    }

    memberSelectSelector() {
        if (this === UserSelectBasePart) {
            throw new TypeError(
                "Can't call static abstract class method memberSelectSelector"
            );
        } else if (
            this.memberSelectSelector ===
            UserSelectBasePart.prototype.memberSelectSelector
        ) {
            throw new TypeError(
                'Please implement static abstract method memberSelectSelector'
            );
        } else {
            throw new TypeError(
                "Don't call static abstract method memberSelectSelector from child"
            );
        }
    }

    addSelectedButtonSelector() {
        if (this === UserSelectBasePart) {
            throw new TypeError(
                "Can't call static abstract class method addSelectedButtonSelector"
            );
        } else if (
            this.addSelectedButtonSelector ===
            UserSelectBasePart.prototype.addSelectedButtonSelector
        ) {
            throw new TypeError(
                'Please implement static abstract method addSelectedButtonSelector'
            );
        } else {
            throw new TypeError(
                "Don't call static abstract method addSelectedButtonSelector from child"
            );
        }
    }

    /**
     *
     * @param {Object|string} userName
     * @returns {string}
     */
    getUserName(userName) {
        let loginName;
        if (typeof userName === 'object') {
            loginName = userName.username;
        } else {
            loginName = userName;
        }
        return loginName;
    }

    /**
     *
     * @param {string} userName
     * @returns {UserSelectBasePart}
     */
    setMember(userName) {
        this.inputUserSearch(userName);
        this.clickOnSearchUserBtn();
        this.selectAttendee(userName);
        this.clickOnAddUserBtn();

        return this;
    }

    /**
     *
     * @param {Object[]} userNameList
     */
    setMembers(userNameList = []) {
        if (typeof userNameList === 'string') {
            const userNameStr = userNameList.toString();
            return this.setMember(userNameStr);
        }
        userNameList.forEach(userNameInput => {
            const userName = this.getUserName(userNameInput);
            this.setMember(userName);
        });
        return this;
    }

    /**
     *
     * @param {string} userName
     * @returns {UserSelectBasePart}
     */
    inputUserSearch(userName) {

        // step one: waiting the input displays
        //ElementUtils.waitForVisible(this.userInputSearchSelector());
        // ElementUtils.element(this.userInputSearchSelector()).click();
        // waiting the place holder is disappeared
        //browser.waitForText(this.userInputSearchSelector(), 1000, true);

        ElementUtils.element(this.userInputSearchSelector()).setValue(userName);


        return this;
    }


    /**
     *
     * @returns {UserSelectBasePart}
     */
    clickOnSearchUserBtn() {
        // step two: search user
        ElementUtils.element(this.userSearchCommandSelector()).click();

        ElementUtils.waitUntilElementDisappear(
            this.userSearchSpinnerSelector()
        );

        return this;
    }

    /**
     *
     * @param {string} attendee
     * @returns {UserSelectBasePart}
     */
    selectAttendee(attendee) {
        // step three: select member
        const selectedAttendee = sprintf(this.memberSelectSelector(), attendee);

        ElementUtils.element(selectedAttendee).click();


        return this;
    }

    clickOnAddUserBtn() {
        ElementUtils.element(this.addSelectedButtonSelector()).click();

        return this;
    }
}
