import axiosInstance from './axiosInstance';

export function getProducts(){
    const response = axiosInstance.get(`/product`);
    return response;
}

export function createProduct(product){
    const response = axiosInstance.post(`/product`, product);
    return response;
}

export function updateProduct(id, product){
    const response = axiosInstance.put(`/product/${id}`, product);
    return response;
}

export function deleteProduct(id){
    const response = axiosInstance.delete(`/product/${id}`);
    return response;
}