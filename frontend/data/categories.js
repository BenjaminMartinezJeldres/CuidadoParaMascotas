import axios from 'axios';

const getCategories = async () => {
    const response = await axios.get(`${process.env.SERVIDOR}/categories`);
    return response
}

const createCategory = (category) => {
    const response = axios.post(`${process.env.SERVIDOR}/category`, {
        name: category.name,
    });
    return response
}

const getCategory = async (id) => {
    console.log(id)
    const response = await axios.get(`${process.env.SERVIDOR}/category/search/${id}`)
    return response
}

const updateCategory = (id, category) => {
    const response = axios.put(`${process.env.SERVIDOR}/category/update/${id}`, category)
    return response
}

module.exports = {
    getCategories,
    createCategory,
    getCategory,
    updateCategory
}