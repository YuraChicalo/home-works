import {useEffect, useState} from "react";
import {getPost, getPosts} from "./services/API";
import GenUsers from "./components/genUsers/GenUsers";
import UserDetails from "./components/userDetails/UserDetails";




function App() {

  let [posts, setPosts] = useState([])
  let [moreDetails, setMoreDetails] = useState([])
  useEffect(()=>{
    getPosts().then(value => {
      console.log(value.data)
      setPosts(value.data)
    })
  },[])

  function selectPost(id) {
    getPost(id).then(value => {
      setMoreDetails(value.data)
      console.log(value.data)
    })
  }
  return (
    <div>
      <GenUsers selectPost = {selectPost} posts = {posts}/>
      {
        moreDetails && <UserDetails item = {moreDetails}/>
      }
    </div>
  );
}

export default App;
