import mongoose from 'mongoose'

const Schema = mongoose.Schema;

const VehiclesSchema = new Schema({
    vehicleType: String, //Tells the vehicle type 2W or 4W
    timeStamp: String, //Tells when the vehicles entered/exited the campus
    direction: String, //Tells if vehicle was emtering or exiting 
    matchedLp: String, //Tells the number plate of the vehicle
    dbMatch: String, //Tells if the vehicle was matched with the database
    images: [], //Tells the images of the vehicle nummber plate
    govtId: String, //RC number of the vehicles
    user: { type: Schema.Types.ObjectId, ref: "users"} //Links the vehicle to a specific user
})

const Vehicles = mongoose.model('vehicles', VehiclesSchema);
export default Vehicles