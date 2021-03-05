import react from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./component/Nav";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "./component/Dashboard";
import LoginPage from "./component/LoginPage";
import BranchPage from "./component/BranchPage";


function App() {
  return (
    <Router>
      <Switch>
        <div>         
          <Nav />
          <Route path="/login" component={LoginPage} />
          <PrivateRoute exact path="/" component={Dashboard} />          
        </div>
      </Switch>
      <Switch>
        <Route path = "/branch" component={BranchPage} />
      </Switch>
      
    </Router>
    
  );
}

export default App;
