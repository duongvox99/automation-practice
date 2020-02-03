import ElementUtils from '../../../../utils/element/ElementUtils';
import BookDeletePage from './BookDelete';

const DELETE_LNK =
    '//*[@id="main_menu_part"]/span[2]/span //a[contains(@href,"book_delete")]';
const BOOK_TITLE_TXT = '//table[@class="view_table"] /tbody/tr[1]/td';
const BOOK_CODE_TXT = '//table[@class="view_table"] /tbody/tr[2]/td';

class BookView {
    /**
     * @returns {BookDelete}
     */
    clickOnDeleteBookLnk() {
        ElementUtils.element(DELETE_LNK).click();
        return BookDeletePage;
    }

    /**
     * @returns {String}
     */
    getAddressBookTitle() {
        return ElementUtils.element(BOOK_TITLE_TXT).getText();
    }

    /**
     * @returns {String}
     */
    getAddressBookCode() {
        return ElementUtils.element(BOOK_CODE_TXT).getText();
    }
}

module.exports = new BookView();
