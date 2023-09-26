import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config();

//DB Connection Start
const uri = process.env.MONGODB_URI;

const connectDB  = () => {
    mongoose.Promise = global.Promise;
    mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("successfully connected to MongoDB"))
    .catch( error => console.error("Failed to connect to MongoDB:", error));
}

export default connectDB
