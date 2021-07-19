import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {getUserDetails} from "../../services/API";

export default function UserDetails() {
    let {id} = useParams()
    let [userDetails, setUserDetails] = useState({})
    useEffect(()=>{
        getUserDetails(id).then(value => {
            setUserDetails({...value.data})
        })
    },[id])
    return (
        <div>
            {userDetails.username}
        </div>
    );
}