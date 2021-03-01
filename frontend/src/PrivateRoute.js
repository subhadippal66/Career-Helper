import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useStateValue } from "./Stateprovider";

export default function PrivateRoute({ component: Component, ...rest }) {
  const [{ user }] = useStateValue();
  return (
    <Route
      {...rest}
      render={(props) => {
        return user ? <Component {...rest} /> : <Redirect to="/login" />;
      }}
    ></Route>
  );
}
