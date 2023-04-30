import axios from 'axios'
const API_URL = 'http://localhost:5000';

export const createUser = async(user)=>{
    const response = await axios.post (`${API_URL}/users/createUser`, user);
    return response;
}
export const getUsers = async(email,password)=>{
    const response = await axios.get(`${API_URL}/users/getUsers/${email}/${password}`);
    return response;
}


export const initializeCourseTopics = async (email, password) => {
    const response = await axios.put(`${API_URL}/users/intializeCourse/${email}/${password}`);
    return response;
}

export const getCourse = async (email, password) => {
    const response = await axios.get(`${API_URL}/users/getCourse/${email}/${password}`);
    return response;
}
export const getUser = async(email,password)=>{
    const response = await axios.get(`${API_URL}/users/getUser/${email}/${password}`);
    return response;
}
export const intializeCourse = async (email, password)=>
{
    const response = await axios.put(`${API_URL}/users/getUser/${email}/${password}`);
    return response;
}