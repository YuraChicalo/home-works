import {Link} from "react-router-dom";

export default function User({user:{name,id}}) {
    return (
        <div>
            {id} - {name} - <Link to={'/users/'+id}>details</Link>
        </div>
    );
}