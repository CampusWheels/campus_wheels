import mongoose from 'mongoose'

var Schema = mongoose.Schema;

var VisitorsSchema = new Schema({
firstName: String, //The first name of the staff member or student.
lastName: String, //The last name of the staff member or student.
email: String, //The email address of the staff member or student.
role: String, //Indicates whether the entry is for a staff member or a student (e.g., 'Staff' or 'Student').
department: String, //The department or major of the individual (for students, it could be their academic major, and for staff, it could be their department within the college).
employeeStudentId: String, //A unique identifier for employees or students, respectively.
phoneNumber: String, //The contact phone number of the individual.
registrationDate: String, //The date when the individual registered with the college.
govtId: String //Aadhar number of the person
});

const visitor = mongoose.model('visitors', VisitorsSchema);
export default visitor

