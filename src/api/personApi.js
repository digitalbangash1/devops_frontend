import axiosInstance from './axiosInstance';

export function getPersons(){
    const response = axiosInstance.get(`/person`);
    console.log("from axiosInstance",response)
    return response;
    
}
