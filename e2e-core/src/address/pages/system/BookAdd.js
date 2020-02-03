import ElementUtils from '../../../../utils/element/ElementUtils';
import BookListPage from './BookList';

const BOOK_SUBJECT_TXB = '//*[@id="sharedbookName-label-line-value-def"]';
const BOOK_CODE_TXB = '//input[@name="id"]';
const ADD_BTN = '.margin';

class BookAdd {
    /**
     * @param {String} bookSubject
     * @returns {BookAdd}
     */
    inputBookSubject(bookSubject) {
        ElementUtils.element(BOOK_SUBJECT_TXB).setValue(bookSubject);
        return this;
    }

    /**
     * @param {String} bookCode
     * @returns {BookAdd}
     */
    inputBookCode(bookCode) {
        ElementUtils.element(BOOK_CODE_TXB).setValue(bookCode);
        return this;
    }

    /**
     * @returns {BookList}
     */
    clickOnAddBtn() {
        ElementUtils.element(ADD_BTN).click();
        return BookListPage;
    }
}

module.exports = new BookAdd();
