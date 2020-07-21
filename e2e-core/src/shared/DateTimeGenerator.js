let moment = require('moment');

class DateTimeGenerator {

    constructor() {
        this._curDate = moment();
        this._adjustedDate = this._curDate;
    }

    getDateAsString(format = undefined) {
        if (typeof format !== "undefined") {
            return this._adjustedDate.format(format).toString();
        }
        return this._adjustedDate.toString();
    }

    getDay() {
        console.log(this._curDate);
        return this._adjustedDate.format('D');
    }

    getMonth() {
        return  this._adjustedDate.format('M');
    }

    getYear() {
        return this._adjustedDate.format('YYYY');
    }

    adjustDate(dateTime, adjustment) {
        if(typeof adjustment.day !== "undefined") {
            this._adjustedDate = dateTime.add(adjustment.day, 'd');
        }
        return this._adjustedDate;
    }

    adjustMonth(dateTime, adjustment) {
        if(typeof adjustment.month !== "undefined") {
            this._adjustedDate = dateTime.add(adjustment.month, 'M');
        }
        return this._adjustedDate;
    }

    adjustDateTime(adjustment){
        this.adjustDate(this._curDate, adjustment);
        this.adjustMonth(this._adjustedDate, adjustment);
        return this;
    }
}

module.exports = DateTimeGenerator;