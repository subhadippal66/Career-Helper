import React, { useEffect, useState } from "react";
import HomePageCard from "./HomePageCard";
import axios from "axios";
import Footer from "./Footer";
import { CircularProgress } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Dashboard() {
  const history = useHistory();
  const [pageData, setpageData] = useState(null);
  const [boxData, setboxData] = useState([1, 2, 3, 4]);

  let field = window.localStorage.getItem("interested_field");
  let branch_ = window.localStorage.getItem("branch");
  let url = null;
  if (field && branch_) {
    field = field.toLowerCase();
    branch_ = branch_.toLowerCase();
    if (field === "coding") {
      url = `https://target-backend-66.herokuapp.com/api/coding`;
    } else {
      url = `https://target-backend-66.herokuapp.com/api/${branch_}`;
    }
  } else {
    history.push("/branch");
    toast.warn("Please choose your preference first", {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
      containerId: 1,
      toastId: 1,
    });
  }

  useEffect(() => {
    async function fetchData() {
      if (url) {
        const request = await axios.get(url);
        setpageData(request.data);
        setboxData(request.data.box);
      }
    }
    fetchData();
  }, []);

  // console.log(boxData);
  // console.log(pageData);

  return (
    <div className="  flex flex-col items-center pt-20 min-h-screen">
      <h1 className="font-bold font-mono tracking-widest uppercase text-xl text-center pb-2">
        DashBoard Home
      </h1>

      {pageData ? (
        <>
          <div className=" uppercase tracking-widest font-thin text-2xl border border-yellow-600 p-4 m-2">
            {pageData?.heading}
          </div>
          <div className="font-mono px-4 text-center">{pageData?.details}</div>
          <div>
            {boxData.map(function (data, i) {
              return (
                <HomePageCard
                  heading={data.heading}
                  details={data.details}
                  links={data.links}
                />
              );
            })}
          </div>
        </>
      ) : (
        <div className=" pt-6 flex flex-col space-y-2 justify-start items-center min-h-screen">
          <CircularProgress color="secondary" />
          <div className="font-extrabold text-2xl">loading</div>
          <div className="text-sm text-center p-4">
            Data is loading from our database, please wait ......
          </div>
        </div>
      )}

      <Footer />
      <div>
        <ToastContainer
          toastId={1}
          containerId={1}
          position="bottom-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable={false}
          pauseOnHover={false}
        />
      </div>
    </div>
  );
}

export default Dashboard;
