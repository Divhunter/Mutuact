import mongoose from "mongoose";
import validator from "validator";
import Message from "./Message.js";

const projetShema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, 'Veuillez fournir votre prénom'],
    },
    lastName: {
        type: String,
        required: [true, 'Veuillez fournir votre nom'],
    },
    email: {
        type: String,
        required: [true, 'Veuillez fournir une adresse e-mail'],
        lowercase: true,
        unique: true,
        validate: [validator.isEmail, 'Veuillez fournir une adresse e-mail valide'],
    },
    phone: {
        type: String,
    },
    messages: [Message.schema],
    isRead: {
        type: Boolean,
        default: false, // Par défaut, les notifications sont non lues
    },
    createdDate: {
        type: Date,
    },
    updatedDate: {
        type: Date,
    },
});


const Projet = mongoose.model('Projet', projetShema);
export default Projet;