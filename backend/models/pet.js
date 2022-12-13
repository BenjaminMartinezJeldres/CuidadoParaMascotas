const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PetSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    race: {
        type: String,
        required: true
    },
    species: {
        type: String,
        required: true
    },
    weight:{
        type: String,
        required: true
    },
    gender:{
        type: String,
        required: true
    },
    owner:{
        type: String,
        required: true
    },
    tiposervicio:{
        type: String,
        required: true
    },
    category: {
        type: Schema.ObjectId,
        ref: 'category'
        }
});

module.exports = mongoose.model('pet', PetSchema);