import BaseDirectlyGaroonPage from '../../common/BaseDirectlyGaroonPage';
import PageNavigator from '../../common/PageNavigator';
import BookAddPage from './BookAdd';
import BookViewPage from './BookView';
import ElementUtils from '../../../../utils/element/ElementUtils';

const PAGE_NAV = 'address/system/book_list';
const BOOK_ADD_LNK = '//*[@id="system_shared_address_book_add"]';
const BOOK_NAME_LNK = '//table[@class="list_column"]//a[text()="%s"]';

class BookList extends BaseDirectlyGaroonPage {
    /**
     * @return {BookList}
     */
    openPage() {
        PageNavigator.openPage(PAGE_NAV);
        return this;
    }

    /**
     * @returns {BookAdd}
     */
    clickOnBookAddLnk() {
        ElementUtils.element(BOOK_ADD_LNK).click();
        return BookAddPage;
    }

    /**
     *  @param bookName
     * @return {BookView}
     */
    clickOnBookLnk(bookName) {
        ElementUtils.element(sprintf(BOOK_NAME_LNK, bookName)).click();
        return BookViewPage;
    }
}

module.exports = new BookList();
