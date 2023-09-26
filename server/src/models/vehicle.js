import mongoose from "mongoose";

var Schema = mongoose.Schema;

var Vehicles = new Schema({
num_plate :String, //registration number plate
vehicle_type :String, //car/bike
// ownerRole :String, //teacher,student, guest etc.
// validity: String, //date till registration of vehicle is valid
time_stamp: String,
direction: String,
matchedLp: String,
dbMatch: String,
images: []
});

const vehicles = mongoose.model('vehicles', Vehicles);
export default vehicles