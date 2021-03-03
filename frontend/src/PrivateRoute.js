import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useStateValue } from "./Stateprovider";

export default function PrivateRoute({ component: Component, ...rest }) {
  // console.log(window.indexedDB.open("firebase"));
  const [{ user }] = useStateValue();
  const user_ = localStorage.getItem("authToken") || null;
  return (
    <Route
      {...rest}
      render={(props) => {
        return user_ ? (
          <Component {...rest} />
        ) : (
          <Redirect
            to={{ pathname: "/login", state: { from: props.location } }}
          />
        );
      }}
    ></Route>
  );
}
