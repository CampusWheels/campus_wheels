import mongoose from 'mongoose'

const Schema = mongoose.Schema;

const UnregisteredVehicleSchema = new Schema({
    vehicle_type: String, 
    time_stamp: String,
    direction: String,
    matchedLp: String,
    dbMatch: String,
    images: [],
})

const UnregisteredVehicle = mongoose.model('unregistered', UnregisteredVehicleSchema);
export default UnregisteredVehicle