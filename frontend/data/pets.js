import axios from 'axios';

const getPets = async () => {
    const response = await axios.get(`${process.env.SERVIDOR}/pets`);
    return response
}

const createPet = (pet) => {
    const response = axios.post(`${process.env.SERVIDOR}/pet`, {
        name: pet.name,
        race: pet.race,
        species: pet.especies,
        weight: pet.weight,
        gender: pet.gender,
        owner: pet.owner
    });
    return response
}

const getPet = async (id) => {
    console.log(id)
    const response = await axios.get(`${process.env.SERVIDOR}/pet/search/${id}`)
    return response
}

const updatePet = (id, pet) => {
    const response = axios.put(`${process.env.SERVIDOR}/pet/update/${id}`, pet)
    return response
}

module.exports = {
    getPets,
    createPet,
    getPet,
    updatePet
}