const moment = require('moment-timezone');

export default class DateTimeUtils {
    /**
     * Get the string date with the ISO format from date provides
     * @param {Date} date
     * @returns {string} - e.g: 2018-09-09
     */
    static formatDate(date) {
        return date.getFullYear() +
            '-' +
            ('0' + (date.getMonth() + 1)).slice(-2) +
            '-' +
            ('0' + date.getDate()).slice(-2);
    }

    static createTimeStr(hours, minute) {
        return `${('0' + hours).slice(-2)}:${('0' + minute).slice(-2)}:00`;
    }

    /**
     * Note that: JavaScript counts months from 0 to 11. January is 0. December is 11.
     * This function is parse the input parameter to Date and get Iso string,
     * @param {Number} year
     * @param {int} month - from 0 to 11
     * @param {int} day
     * @returns {string} - e.g: 2019-09-06
     */
    static createDateStr(year, month, day) {
        const date = new Date(year, month - 1, day, 0, 0, 0);
        return this.formatDate(date);
    }

    /**
     *
     * @param {int=} dayAdjustment
     * @param {int=} hourAdjustment
     * @param {string=} timezone
     * @returns {string} e.g: '2019-09-25T13:40:00Z'
     */
    static createDateTimeIsoStr(dayAdjustment = 0, hourAdjustment = 0, timezone = 'Asia/Tokyo') {
        const today = new Date();
        const adjustmentDate = new Date(
            today.getFullYear(),
            today.getMonth(),
            today.getDate() + dayAdjustment,
            today.getHours() + hourAdjustment,
            today.getMinutes(),
            0
        );

        const dateString = this.createDateStr(
            adjustmentDate.getFullYear(),
            adjustmentDate.getMonth() + 1,
            adjustmentDate.getDate()
        );

        const timeString = this.createTimeStr(
            adjustmentDate.getHours(),
            adjustmentDate.getMinutes()
        );

        return moment.tz(`${dateString} ${timeString}`, timezone).format();
    }
}
