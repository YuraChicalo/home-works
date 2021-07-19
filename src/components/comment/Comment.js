import {Link} from "react-router-dom";

export default function ({comment:{id,name}}) {
    return (
        <div>
            {id} - {name} <Link to={'/comments/'+id}>details</Link>
        </div>
    );
}