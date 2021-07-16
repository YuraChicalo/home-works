export default function Post({posts:{id, title}}) {
    return (
        <div>
            {id} - {title}
        </div>
    );
}