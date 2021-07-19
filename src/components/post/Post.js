import {Link} from "react-router-dom";

export default function Post({post:{id, title}}) {
    return (
        <div>
            {id} - {title} <Link to={'/posts/'+id}>details</Link>
        </div>
    );
}