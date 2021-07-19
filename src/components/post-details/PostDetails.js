import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {getPostDetails} from "../../services/API";

export default function PostDetails() {

    let {id} = useParams()
    let [postDetails, setPostDetails] = useState({})
    useEffect(()=>{
        getPostDetails(id).then(value => {
            setPostDetails({...value.data})
        })
    },[id])
    return (
        <div>
            BODY - {postDetails.body}
        </div>
    );
}