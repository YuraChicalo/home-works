import Simpson from "../simpson/Simpson";

export default function Generel({items}) {
    console.log(items)
    return (
        <div>
            {
                items.map(value => <Simpson item = {value}/>)
            }
        </div>
    );
}