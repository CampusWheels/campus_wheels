import mongoose from "mongoose";

const VehicleEventSchema = new mongoose.Schema({ //data from ANPR
    info: Object,
    event: Object,
    base64_image: Array
});

const VehicleEvent = mongoose.model('vehicleEvent', VehicleEventSchema);
export default VehicleEvent;