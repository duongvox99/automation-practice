import ElementUtils from '../../../utils/element/ElementUtils';
import BookEntryViewPage from './BookEntryView';

const SAVE_BTN = '#address_book_button_save';

class BookEntryModify {
    /**
     * @returns {BookEntryView}
     */
    clickOnSaveBtn() {
        ElementUtils.element(SAVE_BTN).click();
        return BookEntryViewPage;
    }
}

module.exports = new BookEntryModify();
