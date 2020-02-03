import AddressBookIndexPage from './Index';
import ElementUtils from '../../../utils/element/ElementUtils';

const YES_BTN = '//div[@id="msgbox"]//span[@id="msgbox_btn_yes"]/a';

class BookEntryDelete {
    /**
     * @return {Index}
     */
    clickOnYesBtn() {
        ElementUtils.element(YES_BTN).click();

        return AddressBookIndexPage;
    }
}

module.exports = new BookEntryDelete();
