import UserSelectBasePart from '../../shared/pages/UserSelectBase.part';

const USER_SEARCH_SPINNER = '#spinner_selectlist_CID';
const SELECTED_ATTENDEE =    '//ul[@id="ul_selectlist_CID"]/li//span[text() = "%s"]';
const USER_ADD_BTN = '#btn_add_sUID';

class UserSelectPart extends UserSelectBasePart {
    constructor() {
        super();
    }

    userInputSearchSelector() {
        return '#keyword_user';
    }

    userSearchCommandSelector() {
        return '#searchbox-submit-user';
    }

    userSearchSpinnerSelector() {
        return USER_SEARCH_SPINNER;
    }

    memberSelectSelector() {
        return SELECTED_ATTENDEE;
    }

    addSelectedButtonSelector() {
        return USER_ADD_BTN;
    }

}

module.exports = new UserSelectPart();
