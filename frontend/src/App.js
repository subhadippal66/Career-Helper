import react from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./component/Nav";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "./component/Dashboard";
import LoginPage from "./component/LoginPage";
import Error404 from "./component/Error404";
import BranchPage from "./component/BranchPage";
import Profile from "./component/Profile";
// import Course from "./component/Course";
import Topic from "./component/Topic";

function App() {
  return (
    <Router>
      <Switch>
        <div>
          <Nav />
          <Route exact path="/login" component={LoginPage} />
          <PrivateRoute exact path="/" component={Dashboard} />
          <PrivateRoute path="/branch" component={BranchPage} />
          <PrivateRoute path="/profile" component={Profile} />
          {/* <PrivateRoute path="/cpp" component={Course} /> */}
          <PrivateRoute path="/:topic">
            <Topic />
          </PrivateRoute>
        </div>
        {/* <div>
          <Route path="*">
            <Error404 />
          </Route>
        </div> */}
      </Switch>
    </Router>
  );
}

export default App;
