import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {getCommentsDetails} from "../../services/API";

export default function CommentDetails() {
    let {id} = useParams()
    let [commentDetails, setCommentDetails] = useState({})
    useEffect(()=>{
        getCommentsDetails(id).then(value => {
            setCommentDetails({...value.data})
        })
    },[id])
    return (
        <div>
            {commentDetails.email}
        </div>
    );
}