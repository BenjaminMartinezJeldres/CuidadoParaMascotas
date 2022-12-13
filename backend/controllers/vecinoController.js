const Vecino = require('../models/vecino');

const createVecino = (req, res) => {
    const { name, lastname, correo,telefono,genero,edad,residencia,category } = req.body;
    const newVecino = new Vecino({
        name,
        lastname,
        correo,
        telefono,
        genero,
        edad,
        residencia,
        category
    });
    newVecino.save((err, vecino) => {
        if (err) {
            return res.status(400).send({ message: "Error al crear al Vecino" })
        }
        return res.status(201).send(vecino)
    })
}
const getVecinos = (req, res) => {
    Vecino.find({}, (err, vecinos) => {
        if (err) {
            return res.status(400).send({ message: "Error al obtener los Vecinos" })
        }
        return res.status(200).send(vecinos)
    })
}

const getSpecificVecino = (req, res) => {
    const { id } = req.params;
    Vecino.findById(id).populate({ path: 'category' }).exec((err, vecino) => {
        if (err) {
            return res.status(400).send({ message: "Error al obtener Vecino" })
        }
        if (!vecino) {
            return res.status(404).send({ message: "Vecino no encontrada" })
        }
        return res.status(200).send(vecino)
    })
}

const updateVecino = (req, res) => {
    const { id } = req.params;
    Vecino.findByIdAndUpdate(id, req.body, (err, vecino) => {
        if (err) {
            return res.status(400).send({ message: "Error al obtener al vecino" })
        }
        if (!vecinos) {
            return res.status(404).send({ message: "Vecino no encontrado" })
        }
        return res.status(200).send(vecinos)
    })
}

const deleteVecino = (req, res) => {
    const { id } = req.params;
    Vecino.findByIdAndDelete(id, (err, vecinos) => {
        if (err) {
            return res.status(400).send({ message: "Error al obtener al vecino" })
        }
        if (!vecinos) {
            return res.status(404).send({ message: "Vecino no encontrada" })
        }
        return res.status(200).send(vecinos)
    })
}


module.exports = {
    createVecino,
    getVecinos,
    getSpecificVecino,
    updateVecino,
    deleteVecino
}