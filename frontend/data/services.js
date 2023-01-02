import axios from 'axios';

const getServices = async () => {
    const response = await axios.get(`${process.env.SERVIDOR}/services`);
    return response
}

const createService = (service) => {
    const response = axios.post(`${process.env.SERVIDOR}/service`, {
        name: service.name,
        price: service.price,
        description: service.description,
    });
    return response
}

const getService = async (id) => {
    console.log(id)
    const response = await axios.get(`${process.env.SERVIDOR}/service/search/${id}`)
    return response
}

const updateService = (id, service) => {
    const response = axios.put(`${process.env.SERVIDOR}/service/update/${id}`, service)
    return response
}

module.exports = {
    getServices,
    createService,
    getService,
    updateService
}