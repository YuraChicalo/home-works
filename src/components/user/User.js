import {Link} from "react-router-dom";

export default function User({user:{id, name}}) {
    return (
        <div>
            {id} - {name} <Link to={'/users/'+id+'/allPosts'}>posts</Link>
        </div>
    );
}