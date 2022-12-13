const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const VecinoSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    correo: {
        type: String,
        required: true,
        match:/[\w\.\_]{5,30}\+[\w]{0,10}@[\w]{3,}\.\2{2,5}/
    },
    telefono: {
        type: String,
        required: true,
        match:/^\+?\d{2}\s\d{1}\s\d{4}\s\d{4}/
    },
    genero: {
        type: String,
        required: true
    },
    edad: {
        type: String,
        required: true
    },
    residencia: {
        type: String,
        required: true
    },
    category: {
        type: Schema.ObjectId,
        ref: 'category'
        }
});

module.exports = mongoose.model('vecino', VecinoSchema);