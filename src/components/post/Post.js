import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import PostsComment from "../postsComment/PostsComment"

export default function Post({posts:{id, title}}) {
    return (

        <Router>
            <div>
                {id} - {title} <Link to={'/posts/'+id +'/comments'}>comments</Link>
                <Route path={'/posts/'+id +'/comments'} render={()=>{
                    return <PostsComment id={id}/>
                }}/>
            </div>
        </Router>
    );
}