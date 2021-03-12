import React, { useEffect, useState } from "react";
import HomePageCard from "./HomePageCard";
import axios from "axios";
import Footer from "./Footer";

function Dashboard() {
  const [pageData, setpageData] = useState();
  const [boxData, setboxData] = useState([1, 2, 3, 4]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get("http://localhost:5000/api/coding");
      setpageData(request.data);
      setboxData(request.data.box);
    }
    fetchData();
  }, []);

  // console.log(boxData);
  // console.log(pageData);

  return (
    <div className=" bg-gray-800 flex flex-col items-center pt-20 min-h-screen">
      <h1 className="font-bold font-mono tracking-widest uppercase text-gray-100 text-xl text-center pb-2">
        DashBoard Home
      </h1>
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
      <Footer />
    </div>
  );
}

export default Dashboard;
