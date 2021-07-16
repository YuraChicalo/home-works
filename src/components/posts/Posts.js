import {useEffect, useState} from "react";
import {getPosts} from "../../services/API";
import Post from "../post/Post";

export default function Posts() {

    let [posts, setPosts] = useState([])
    useEffect(()=>{
        getPosts().then(value => {
            setPosts(value.data)
        })
    },[])
    return (
        <div>
            {
                posts.map(value => <Post key = {value.id} posts={value}/>)
            }
        </div>
    );
}