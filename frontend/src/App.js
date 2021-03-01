import react from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./component/Login";
import Nav from "./component/Nav";
import PrivateRoute from "./PrivateRoute";
import Pref1 from "./component/Pref1";
import Dashboard from "./component/Dashboard";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <PrivateRoute path="/dashboard" component={Dashboard} />
        <Route path="/login" component={Login} />
        <Route exact path="/">
          Home
        </Route>
      </div>
    </Router>
  );
}

export default App;
