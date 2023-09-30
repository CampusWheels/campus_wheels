import mongoose from 'mongoose'

const Schema = mongoose.Schema;

const CredentialsSchema = new Schema({
    password: String, //Tells the passsword for the account
    timeStamp: String, //Tells when the user logged in
    sToken: String, //Stores the session token for the user
    user: { type: Schema.Types.ObjectId, ref: "users"} //Links the vehicle to a specific user
})

const Credentials = mongoose.model('credentials', CredentialsSchema);
export default Credentials