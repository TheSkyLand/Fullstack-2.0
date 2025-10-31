import { $api, config } from "../apiconnect"
import { productsData } from "../../types/common/data.types"

export const getData = () => {
    return $api.get('/shop', { headers: config() })
}

export const getExactData = () => {
    return $api.get('/shop/data/', { headers: config() })
}

export const getExactDataId = (id: number) => {
    return $api.get(`/shop/data/${id}`, { headers: config() })
}

export const createData = (body: productsData) => {
    return $api.post('/shop/data/', body, {headers: config()})
}

export const editData = (id: number, body: productsData) => {
    return $api.put(`/shop/data/${id}`, body, { headers: config() })
}

export const deleteData = (id: number) => {
    return $api.delete(`/shop/data/${id}`, { headers: config() })
}
