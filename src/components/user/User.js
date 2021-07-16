export default function User({post: {id, title}, selectPost}) {
    return (
        <div>
            {id} - {title} <button onClick={()=>{
                selectPost(id)
        }}>more details</button>
        </div>
    );
}