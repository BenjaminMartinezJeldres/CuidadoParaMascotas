const Pet = require('../models/pet');
const Vecino = require('../models/vecino');
const Service = require('../models/service');

const createPet = (req, res) => {
    const { name, race, species,weight,gender,owner,tiposervicio, category } = req.body;
    const newPet = new Pet({
        name,
        race,
        species,
        weight,
        gender,
        owner,
        tiposervicio,
        category
    });
    newPet.save((err, pet) => {
        if (err) {
            return res.status(400).send({ message: "Error al crear la mascota" })
        }
        return res.status(201).send(pet)
    })
}
const getPets = (req, res) => {
    Pet.find({}, (err, pets) => {
        if (err) {
            return res.status(400).send({ message: "Error al obtener las mascotas" })
        }
        return res.status(200).send(pets)
    })
}

const getSpecificPet = (req, res) => {
    const { id } = req.params;
    Pet.findById(id).populate({ path: 'vecino' }).exec((err, pet) => {
        if (err) {
            return res.status(400).send({ message: "Error al obtener la mascota" })
        }
        if (!pet) {
            return res.status(404).send({ message: "Mascota no encontrada" })
        }
        return res.status(200).send(pet)
    })
}

const updatePet = (req, res) => {
    const { id } = req.params;
    Pet.findByIdAndUpdate(id, req.body, (err, pets) => {
        if (err) {
            return res.status(400).send({ message: "Error al obtener la mascota" })
        }
        if (!pets) {
            return res.status(404).send({ message: "Mascota no encontrado" })
        }
        return res.status(200).send(pets)
    })
}

const deletePet = (req, res) => {
    const { id } = req.params;
    Pet.findByIdAndDelete(id, (err, pets) => {
        if (err) {
            return res.status(400).send({ message: "Error al obtener la mascota" })
        }
        if (!pets) {
            return res.status(404).send({ message: "Mascota no encontrada" })
        }
        return res.status(200).send(pets)
    })
}


module.exports = {
    createPet,
    getPets,
    getSpecificPet,
    updatePet,
    deletePet
}