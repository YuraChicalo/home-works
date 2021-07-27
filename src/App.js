import {BrowserRouter as Router, Link, Switch, Route} from "react-router-dom";
import Users from "./components/users/Users";

function App() {
  return (
      <Router>
          <div>
              <div><Link to={'/users'}>users</Link></div>
              <Switch>
                  <Route path={'/users'} render={()=>{
                      return <Users/>
                  }}/>
              </Switch>
          </div>
      </Router>
  );
}

export default App;
