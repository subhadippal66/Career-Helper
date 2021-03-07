import React, { useState } from "react";
import HomePageCard from "./HomePageCard";
import axios from "axios";

function Dashboard() {
  const [pageData, setpageData] = useState(null);

  axios
    .get(
      "https://github.com/subhadippal66/Study-Database/blob/main/coding/coding.json"
    )
    .then(function (res) {
      console.log(res);
    })
    .catch(function (e) {
      console.log(e);
    });

  return (
    <div className=" bg-blue-300 flex flex-col items-center pt-20">
      <h1 className="font-bold text-black text-xl text-center pb-4">
        DashBoard Home
      </h1>
      <div>
        <HomePageCard />
        <HomePageCard />
        <HomePageCard />
        <HomePageCard />
        <HomePageCard />
        <HomePageCard />
        <HomePageCard />
      </div>
    </div>
  );
}

export default Dashboard;
