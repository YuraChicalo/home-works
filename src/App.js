import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";
import Users from "./components/users/Users";

function App() {
  return (
      <Router>
          <div>
              <Link to={'/users'}>users</Link>
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
