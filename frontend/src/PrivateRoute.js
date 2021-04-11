import React from "react";
import { Redirect, Route } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { useStateValue } from "./Stateprovider";
import "react-toastify/dist/ReactToastify.css";

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
          <>
            {toast.error("log-in First", {
              toastId: 10,
              position: "bottom-right",
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: false,
              draggable: false,
              progress: undefined,
            })}

            <Redirect
              to={{ pathname: "/login", state: { from: props.location } }}
            />
            <ToastContainer
              containerId={10}
              position="bottom-right"
              autoClose={2000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable={false}
              pauseOnHover={false}
              limit={1}
            />
          </>
        );
      }}
    ></Route>
  );
}
