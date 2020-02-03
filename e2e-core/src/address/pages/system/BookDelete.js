import ElementUtils from '../../../../utils/element/ElementUtils';
import BookListPage from './BookList';

const YES_BTN = '.margin';

class BookDelete {
    /**
     * @returns {BookList}
     */
    clickOnYesBtn() {
        ElementUtils.element(YES_BTN).click();
        return BookListPage;
    }
}

module.exports = new BookDelete();
