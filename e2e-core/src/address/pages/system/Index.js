import $ from '../../../../utils/element/ElementUtils';

const BOOKS_LNK = '//*[@id="address/system/book_list"]';

class Index {
    /**
     * @returns {Index}
     */
    clickOnBookListLnk() {
        $.element(BOOKS_LNK).click();
        return this;
    }
}

module.exports = new Index();
