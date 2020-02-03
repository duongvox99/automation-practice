import BookBaseFlow from './BookBaseFlow';
import BookListPage from '../../pages/address/system/BookList';

export default class AddingBook extends BookBaseFlow {
    /**
     * @constructor
     * @inheritDoc
     * @see BookBaseFlow
     * @param {AddressBook} bookData - test data Object
     * @param {Object=} credential
     */
    constructor(bookData, credential = null) {
        super(bookData, credential);
    }

    /**
     * @returns {AddingBook}
     */
    addBook() {
        BookListPage.openPage().clickOnBookAddLnk();
        super.fillBookInfoAndSubmit();

        return this;
    }
}
