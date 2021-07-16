import User from "../user/User";

export default function GenUsers({posts, selectPost}) {
    return (
        <div>
            {
                posts.map(value => <User key = {value.id} selectPost={selectPost} post = {value}/>)
            }
        </div>
    );
}