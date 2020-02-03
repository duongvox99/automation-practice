import AppointmentBase from './AppointmentBase';
import {APPOINTMENT_TYPE} from "../ConstantItems";

export default class RegularAppointment extends AppointmentBase {
    constructor() {
        super(APPOINTMENT_TYPE.regular);
    }

    set startHour(value) {
        if (value > 24) {
            throw new TypeError(`Specify a hour invalid.(${value})`);
        }
        this._startHour = value;
    }

    get startHour() {
        return this._startHour;
    }

    set startMinute(value) {
        if (value > 60 || value < 0) {
            throw new TypeError(`ERROR: specify the minute invalid.(${value})`);
        }
        this._startMinute = value;
    }

    get startMinute() {
        return this._startMinute;
    }

    set endHour(value) {
        this._endHour = value;
    }

    get endHour() {
        return this._endHour;
    }

    set endMinute(value) {
        this._endMinute = value;
    }

    get endMinute() {
        return this._endMinute;
    }

    set facilityRequestPurpose(value) {
        this._facilityRequestPurpose = value;
    }

    get facilityRequestPurpose() {
        return this._facilityRequestPurpose;
    }

    set facilityRequestUsage(value) {
        this._facilityRequestUsage = value;
    }

    get facilityRequestUsage() {
        return this._facilityRequestUsage;
    }

    set facilityProcessComment(value) {
        this._facilityProcessComment = value;
    }

    get facilityProcessComment() {
        return this._facilityProcessComment;
    }

    set facilities(value) {
        this._facilities = value;
    }

    get facilities() {
        return this._facilities;
    }
    set responseInfo(value) {
        this._responseInfo = value;
    }

    get responseInfo() {
        return this._responseInfo;
    }
    set todoTitle(value) {
        this._todoTitle = value;
    }

    get todoTitle() {
        return this._todoTitle;
    }

    set requestResponses(value) {
        this._requestResponses = value;
    }

    get requestResponses() {
        return this._requestResponses;
    }
}
