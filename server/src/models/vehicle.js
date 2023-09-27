import mongoose from "mongoose";

var Schema = mongoose.Schema;

var Vehicles = new Schema({
vehicle_type: String, 
time_stamp: String,
direction: String,
matchedLp: String,
dbMatch: String,
images: []
});

const vehicles = mongoose.model('vehicles', Vehicles);
export default vehicles