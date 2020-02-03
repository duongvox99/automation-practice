import BookEntryAddPage from './BookEntryAdd';
import BookEntryViewPage from './BookEntryView';
import ElementUtils from '../../../utils/element/ElementUtils';
import PageNavigator from '../common/PageNavigator';
import BaseDirectlyGaroonPage from '../common/BaseDirectlyGaroonPage';

const PAGE_NAV = 'address/index';
const BOOK_SELECTED_TXT = '//td[@class="tab_on"]';
const ADD_ENTRY_LNK = '#address_add';
const BOOK_NAME_TAB = '//a[contains(.,"%s")]';
const ADDRESS_NAME_TXT =
    '//table[@class="list_column"]/tbody/tr/td[2]//a[text()="%s"]';
const USER_PROFILE_IMG =
    '//td[a[text()="%s"]]//div[@class="profileImageFrame-grn"]/div[contains(@style, "/api/user/photo.do/-/user.png?")]';
const ADDRESS_SEARCHING_TXB = '//div[@class="search_navi"]/input[1]';
const ADDRESS_SEARCHING_BTN = '//div[@class="search_navi"]/input[2]';

class Index extends BaseDirectlyGaroonPage {
    /**
     * @returns {Index}
     */
    openPage() {
        PageNavigator.openPage(PAGE_NAV);

        return this;
    }

    /**
     * @returns {BookEntryAdd}
     */
    clickOnAddAddressEntryLnk() {
        ElementUtils.element(ADD_ENTRY_LNK).click();
        return BookEntryAddPage;
    }

    /**
     * @param {String} bookName
     * @returns {boolean}
     */
    isBookSelected(bookName) {
        const bookNameSelected = ElementUtils.element(BOOK_SELECTED_TXT)
            .getText()
            .trim();
        return bookNameSelected === bookName;
    }

    /**
     * @param {String} addressName
     * @returns {BookEntryView}
     */
    clickOnAddressEntryLnk(addressName) {
        ElementUtils.element(sprintf(ADDRESS_NAME_TXT, addressName)).click();
        return BookEntryViewPage;
    }

    /**
     * @param {String} bookName
     * @returns {Index}
     */
    clickOnSelectExpectedBook(bookName) {
        ElementUtils.element(sprintf(BOOK_NAME_TAB, bookName)).click();
        return this;
    }

    /**
     * @param {String} userName
     * @returns {boolean}
     */
    hasUserProfilePicture(userName) {
        const userProfileImage = sprintf(USER_PROFILE_IMG, userName);
        return ElementUtils.isElementVisible(userProfileImage);
    }

    /**
     * @param {String} displayName
     * @returns {Index}
     */
    searchUserByDisplayName(displayName) {
        ElementUtils.element(ADDRESS_SEARCHING_TXB).setValue(displayName);
        ElementUtils.element(ADDRESS_SEARCHING_BTN).click();

        return this;
    }

    /**
     * @param {String} addressName
     * @returns {boolean}
     */
    isAddressEntryExisting(addressName) {
        return ElementUtils.isElementVisible(
            sprintf(ADDRESS_NAME_TXT, addressName)
        );
    }
}

module.exports = new Index();
