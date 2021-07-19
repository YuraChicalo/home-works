import {useEffect, useState} from "react";
import {getPosts} from "../../services/API";
import Post from "../post/Post";
import {Switch, Route} from "react-router-dom";
import PostDetails from "../post-details/PostDetails";

export default function Posts() {

    let [posts, setPosts] = useState([])
    useEffect(()=>{
        getPosts().then(value => {
            setPosts(value.data)
        })
    },[])
    return (
        <div>
            {posts.map(post=> <Post key={post.id} post = {post}/>)}
            <Switch>
                <Route path={'/posts/:id'} component={PostDetails}/>
            </Switch>
        </div>
    );
}