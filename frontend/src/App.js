import react from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./component/Nav";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "./component/Dashboard";
import LoginPage from "./component/LoginPage";
import Error404 from "./component/Error404";
import BranchPage from "./component/BranchPage";

function App() {
  return (
    <Router>
      <Switch>
        <div>
          <Nav />
          <Route exact path="/login" component={LoginPage} />
          <PrivateRoute exact path="/" component={Dashboard} />
          <Route path="/branch" component={BranchPage} />
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
