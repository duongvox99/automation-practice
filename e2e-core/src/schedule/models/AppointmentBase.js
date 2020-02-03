import {APPOINTMENT_TYPE} from "../ConstantItems";

export default class AppointmentBase {
    constructor(appointmentType) {
        this._appointmentType = appointmentType;
        this._visibility = 'Public';
    }

    set subject(value) {
        if (value != null && value.length > 100) {
            throw new TypeError(
                "Can't set the subject of appointment greater than 100 chars"
            );
        }
        this._subject = value;
    }

    get subject() {
        return this._subject;
    }

    set appointmentType(value) {
        if (value in APPOINTMENT_TYPE) {
            this._appointmentType = value;
        } else {
            throw new TypeError(
                'ERROR: specify the appointment type does not exists.'
            );
        }
    }

    get appointmentType() {
        return this._appointmentType;
    }

    set startDay(value) {
        this._startDay = value;
    }

    get startDay() {
        return this._startDay;
    }

    set startMonth(value) {
        this._startMonth = value;
    }

    get startMonth() {
        return this._startMonth;
    }

    set startYear(value) {
        this._startYear = value;
    }

    get startYear() {
        return this._startYear;
    }

    set endDay(value) {
        this._endDay = value;
    }

    get endDay() {
        return this._endDay;
    }

    set endMonth(value) {
        this._endMonth = value;
    }

    get endMonth() {
        return this._endMonth;
    }

    set endYear(value) {
        this._endYear = value;
    }

    get endYear() {
        return this._endYear;
    }

    set attendees(value) {
        this._attendees = value;
    }

    get attendees() {
        return this._attendees;
    }

    set organizations(value) {
        this._organizations = value;
    }

    get organizations() {
        return this._organizations;
    }

    set notes(value) {
        this._notes = value;
    }

    get notes() {
        return this._notes;
    }

    set eventMenu(value) {
        this._eventMenu = value;
    }

    get eventMenu() {
        return this._eventMenu;
    }

    set attachments(value) {
        if (value instanceof Array) {
            this._attachments = value;
        } else {
            throw new TypeError('ERROR: Please provide a array.');
        }
    }

    get attachments() {
        return this._attachments;
    }

    set visibility(value) {
        this._visibility = value;
    }

    get visibility() {
        return this._visibility;
    }

    get hourToMove() {
        return this._hourToMove;
    }

    set hourToMove(value) {
        this._hourToMove = value;
    }

    get adjustmentStartTime() {
        return this._adjustmentStartTime;
    }

    set adjustmentStartTime(value) {
        this._adjustmentStartTime = value;
    }

    set adjustmentEndTime(value) {
        this._adjustmentEndTime = value;
    }

    get adjustmentEndTime() {
        return this._adjustmentEndTime;
    }

    set isAttendanceCheck(value) {
        this._isAttendanceCheck = value;
    }

    get isAttendanceCheck() {
        return this._isAttendanceCheck;
    }

    set attendeesTimezone(value) {
        this._attendeesTimezone = value;
    }

    get attendeesTimezone() {
        return this._attendeesTimezone;
    }

    set companyInfo(value) {
        this._companyInfo = value;
    }

    get companyInfo() {
        return this._companyInfo;
    }

    set creator(value) {
        this._creator = value;
    }

    get creator() {
        return this._creator;
    }

    set updater(value) {
        this._updater = value;
    }

    get updater() {
        return this._updater;
    }

    /**
     * Clone to new object
     * @return {AppointmentBase}
     */
    clone() {
        return Object.assign(Object.create(this), this);
    }
}
