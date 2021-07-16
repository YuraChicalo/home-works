import axios from "axios";

let path = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/posts'
})

const getPosts = () => path();
const getPost = (id) => path('/'+id);

export {getPosts, getPost};