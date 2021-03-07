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
    <div className=" bg-gray-800 flex flex-col items-center pt-20">
      <h1 className="font-bold font-mono tracking-widest uppercase text-gray-100 text-xl text-center pb-2">
        DashBoard Home
      </h1>
      <div>
        <HomePageCard
          heading="Coding Language"
          details="A programming language is a formal language comprising a set of instructions that produce various kinds of output. Programming languages are used in computer programming to implement algorithms. Most programming languages consist of instructions for computers."
          links={["C", "C++", "JAVA", "Python", "Ruby"]}
        />
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
