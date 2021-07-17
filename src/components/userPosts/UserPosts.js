import {useEffect, useState} from "react";
import {getUsersPost} from "../../services/API";

export default function UserPosts({id}) {

    let [userPosts, setUserPosts] = useState([])
    useEffect(()=>{
        getUsersPost(id).then(value => {
            setUserPosts(value.data)
        })
    },[])
    return (
        <div>
            {
                userPosts.map(post => <h4 key={post.id}>{post.id} - {post.title}</h4>)
            }

        </div>
    );
}