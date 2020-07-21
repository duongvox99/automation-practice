import ElementBase from './ElementBase';

class ChromeElementUtils extends ElementBase {
    constructor() {
        super();
    }

    /**
     *
     * @param {object} coordinates
     * @returns {ChromeElementUtils}
     */
    doubleClickByCoordinates(coordinates) {
        throw new TypeError(
            'Please implement function body because calling :)'
        );
    }
}
module.exports = new ChromeElementUtils();
