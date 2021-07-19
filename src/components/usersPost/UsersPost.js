import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {getUsersPost} from "../../services/API";

export default function UsersPost() {
    let {id} = useParams()
    let [posts, setPosts] = useState([])
    useEffect(()=>{
        getUsersPost(id).then(value => {
            setPosts([...value.data])
        })
    },[id])
    return (
        <div>
            {posts.map(post=> <div key={post.id}>{post.id} - {post.title}</div>)}
        </div>
    );
}