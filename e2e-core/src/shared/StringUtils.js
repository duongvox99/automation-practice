export default class StringUtils {
    /**
     * Remove all the spaces of the str input param
     * e.g:
     * input string: Tue, July 03, 201800:00 - 23:59(All day)
     * output string: Tue,July03,201800:00-23:59(Allday)
     * @param {string=} str
     * @returns {string}
     */
    static removeAllSpaces(str = '') {
        return str.replace(/\s/g, '');
    }
}
