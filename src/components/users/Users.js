import {useEffect} from "react";
import {getUsers} from "../../services/API";
import {useSelector, useDispatch} from "react-redux";
import User from "../user/User";

export default function Users() {
    const dispatch = useDispatch()

    useEffect(()=>{
        getUsers().then(value => {
            dispatch({type: 'GET_USERS', payload: value.data})
        })
    },[])

    const users = useSelector(({users})=> users)
    console.log(users)

    return (
        <div>
            {
                users.map(user => <User key={user.id} user={user}/>)
            }
        </div>
    );
}