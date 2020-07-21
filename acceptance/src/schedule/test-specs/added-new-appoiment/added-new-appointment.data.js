import DateTimeGenerator from "../../../../../e2e-core/src/shared/DateTimeGenerator";
import RegularAppointment from "../../../../../e2e-core/src/schedule/models/RegularAppointment";

const account = {username: "user1", password: "user1"};

const currentDate = new DateTimeGenerator().adjustDateTime({day: 0});
let currentHours = new Date().getHours();
const appointment = new RegularAppointment();

appointment.subject = `Cybozu automation testing workshop ${(new Date()).toString()}`;

appointment.startMonth = currentDate.getMonth();
appointment.startDay = currentDate.getDay();
appointment.startYear = currentDate.getYear();
appointment.startHour = (currentHours + 1).toString(); // e.g: 17
appointment.startMinute = '00'; // to emulate the end-user behavior

appointment.endMonth = currentDate.getMonth();
appointment.endDay = currentDate.getDay();
appointment.endYear = currentDate.getYear();
appointment.endHour = (currentHours + 2).toString();
appointment.endMinute = '00';

appointment.attendees = []; // ["user1","user2"];
appointment.facilities = [];
appointment.attachments = [];
appointment.visibility = 'Public';

appointment.notes = 'Please join the AWS on time';

const testData = {appointmentInfo: appointment, account: account};

export {testData as default}
