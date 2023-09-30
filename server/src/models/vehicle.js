import mongoose from "mongoose";

var Schema = mongoose.Schema;

var VehiclesSchema = new Schema({
vehicle_type: String, 
time_stamp: String,
direction: String,
matchedLp: String,
dbMatch: String,
images: [],
});

const Vehicles = mongoose.model('vehicles', VehiclesSchema);
export default Vehicles