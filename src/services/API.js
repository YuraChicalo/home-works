import axios from "axios";

let instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
})

const getUsers = () => instance('/users');
const getPosts = () => instance('/posts');
const getComments = () => instance('/comments');

const getUsersPost = (id) => instance('/users/'+id +'/posts');

export {getUsers, getPosts, getComments, getUsersPost};