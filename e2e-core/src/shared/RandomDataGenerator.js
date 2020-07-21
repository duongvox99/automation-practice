const DEFAULT_RANDOM_LENGTH = 10;

class RandomDataGenerator {
    /**
     *
     * @param {Object=} options
     * @returns {string}
     */
    static randomizeString(options = {}) {
        let length = DEFAULT_RANDOM_LENGTH; // default length
        let prefix = '';
        let suffix = '';

        if (options) {
            if (typeof options.length !== 'undefined') {
                length = options.length;
            }

            if (typeof  options.prefix !== 'undefined') {
                prefix = options.prefix;
            }

            if (typeof  options.suffix !== 'undefined') {
                suffix = options.suffix;
            }
        }

        let randomText = '';
        let possibleChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

        for (let i = 0; i < length; i++) {
            randomText += possibleChars.charAt(Math.floor(Math.random() * possibleChars.length));
        }

        return (prefix + randomText.substr(0, length) + suffix);
    }
}
module.exports = RandomDataGenerator;
