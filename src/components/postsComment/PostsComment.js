import {useEffect, useState} from "react";
import {getPostsComment} from "../../services/API";

export default function PostsComment({id}) {

    let [postsComment, setPostsComment] = useState([])
    useEffect(()=>{
        getPostsComment(id).then(value => {
            setPostsComment(value.data)
        })
    },[])
    return (
        <div>
            {
                postsComment.map(comment => <h4 key={comment.id}>{comment.id} - {comment.name}</h4>)
            }
        </div>
    );
}