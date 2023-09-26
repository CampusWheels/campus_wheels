import mongoose from "mongoose";

const VehicleEventSchema = new mongoose.Schema({
    info: Object,
    event: Object,
    base64_image: Array
});

const VehicleEvent = mongoose.model('VehicleEvent', VehicleEventSchema);
export default VehicleEvent;