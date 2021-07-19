import axios from "axios";
let axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
})

const getUsers = ()=> axiosInstance('/users')
const getUserDetails = (id)=> axiosInstance('/users/'+id)
const getPosts = ()=> axiosInstance('/posts')
const getPostDetails = (id)=> axiosInstance('/posts/'+id)
const getComments = ()=> axiosInstance('/comments')
const getCommentsDetails = (id)=> axiosInstance('/comments/'+id)
export {getUsers, getUserDetails, getPosts, getPostDetails, getComments, getCommentsDetails}