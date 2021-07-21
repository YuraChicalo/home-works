import {useEffect, useState} from "react";
import Form from "./Form";


function App() {
  let [users, setUsers] = useState([])
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=> response.json())
        .then(value => {
          setUsers([...value])
        })
  },[])
  return (
    <div>
        <Form users={users}/>
    </div>
  );
}

export default App;
