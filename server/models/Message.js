import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
    content: {
        type: String,
    },
    createdDate: {
        type: Date,
        default: Date.now,
    },
});

const Message = mongoose.model('Message', messageSchema);
export default Message;
