import React, {useEffect, useState} from 'react';
import {getUsersPost} from "../services/API";

const UserPosts = ({userID}) => {
    let [postsOfUser, setPostsOfUser] = useState([]);

    useEffect(() => {
        getUsersPost(userID).then(value => setPostsOfUser(value.data));
    }, [userID]);
    return (
        <div>
            {postsOfUser.map(value => <div key={value.id}>
                {value.id}. {value.title}
            </div>)}
        </div>
    )
}

export default UserPosts;