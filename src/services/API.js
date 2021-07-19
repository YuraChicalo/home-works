import axios from "axios";
let axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
})

const getUsers = ()=> axiosInstance('/users')
const getUsersPost = (id)=> axiosInstance('/users/'+id+'/posts')
export {getUsers, getUsersPost}