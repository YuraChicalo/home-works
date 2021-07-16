import {useEffect, useState} from "react";
import {getComments} from "../../services/API";
import Comment from "../comment/Comment";

export default function Comments() {
    let [comments, setComments] = useState([])
    useEffect(()=>{
        getComments().then(value => {
            setComments(value.data)
        })
    },[])
    return (
        <div>
            {
                comments.map(value => <Comment key = {value.id} comment={value}/>)
            }
        </div>
    );
}