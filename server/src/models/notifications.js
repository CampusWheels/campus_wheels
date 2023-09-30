import mongoose from 'mongoose'

const Schema = mongoose.Schema;

const NotificationsSchema = new Schema({
    title: String, //Stores the title of the notification
    timeStamp: String, //Tells when the user logged in
    message: String, //Stores the content of the notification
    byUser: { type: Schema.Types.ObjectId, ref: "users"} //Links to specific user who sent the notification
})

const Notifications = mongoose.model('notifications', NotificationsSchema);
export default Notifications