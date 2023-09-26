import mongoose from "mongoose";

var Schema = mongoose.Schema;

var Vehicles = new Schema({
num :String, //registration number plate
type :String, //car/bike
ownerRole :String, //teacher,student, guest etc.
validity: String, //date till registration of vehicle is valid
});

module.exports = mongoose.model('vehicles', Vehicles);