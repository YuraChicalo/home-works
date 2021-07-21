import {useState} from "react";

export default function Form({users}) {
    let [user, setUser] = useState({})
    let userChoose = (e)=>{
        let userId = e.target.value
        let find = users.find(value=> value.id === userId)
        setUser(find)
    }


    return (
        <div>
            <form onSubmit={userChoose}>
                <select value={user} onChange={userChoose}>
                    {
                        users.map(user => <option key={user.id} value={user.id}>{user.name}</option>)
                    }
                </select>
            </form>
        </div>
    );
}