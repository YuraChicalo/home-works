export default function Simpson(props) {
    let {item: {name, surname}} = props;
    console.log(props.item)
    return (
        <div>
           <h2>{name} {surname}</h2>
        </div>
    );
}