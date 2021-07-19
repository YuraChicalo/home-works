import {useEffect, useState} from "react";
import {getUsers} from "../../services/API";
import User from "../user/User";
import {Route, Switch} from "react-router-dom";
import UsersPost from "../usersPost/UsersPost";

export default function Users() {
    let [users, setUsers] = useState([])
    useEffect(()=>{
        getUsers().then(value => {
            setUsers(value.data)
        })
    },[])
    return (
        <div>
            {users.map(value => <User key={value.id} user={value}/>)}
            <Switch>
                <Route path={'/users/:id/allPosts'} component={UsersPost}/>
            </Switch>
        </div>
    );
}