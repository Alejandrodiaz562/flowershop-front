import axios from 'axios'

const API_URL = 'https://flowershop-back.onrender.com/api/products'

export const getProducts = () => {
    return axios.get(API_URL)
}

export const deleteProduct = (id) => {
    return axios.delete(`${API_URL}/${id}`)
}

