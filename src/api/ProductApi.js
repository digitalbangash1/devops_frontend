import axiosInstance from './axiosInstance';

export function getProducts(){
    const response = axiosInstance.get(`/products`);
    return response;
}

export function createProduct(product){
    const response = axiosInstance.post(`/products`, product);
    return response;
}

export function updateProduct(id, product){
    const response = axiosInstance.put(`/products/${id}`, product);
    return response;
}

export function deleteProduct(id){
    const response = axiosInstance.delete(`/products/${id}`);
    return response;
}

export function getProduct(id) {
    const response = axiosInstance.get(`/products/${id}`);
    return response;
}

export function  getFeedback(){
    const response = axiosInstance.get(`/feedback`);
    return response;
}

export function createFeedback(feedback){
    const response = axiosInstance.post(`/feedback`, feedback);
    return response;
}