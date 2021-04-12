import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReadBox from "./topicPageComp/ReadBox";
import ShortVideo from "./topicPageComp/ShortVideo";
import TitleCard from "./topicPageComp/TitleCard";
import Tutorial from "./topicPageComp/Tutorial";
import Footer from "./Footer";
import { CircularProgress } from "@material-ui/core";

function Topic() {
  let { topic } = useParams();
  const [topicData, settopicData] = useState(null);
  const backendUrl = `https://target-backend-66.herokuapp.com/api/coding/${topic}`;
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(backendUrl);
      settopicData(request.data);
    }
    fetchData();
  }, []);
  console.log(topicData);
  //if (topicData !== "not Found") {
  return (
    <div className="min-h-screen w-full">
      {topicData ? (
        <div className="pt-20 flex flex-col space-y-10">
          <div className="">
            <TitleCard
              heading={topicData.heading}
              image={topicData.image}
              details={topicData.details}
            />
          </div>
          <div>
            <ShortVideo videos={topicData.videos} />
          </div>
          <div>
            <ReadBox data={topicData.box} />
          </div>
          <div>
            <Tutorial videos={topicData.tutorials} />
          </div>
          <Footer />
        </div>
      ) : (
        <div className=" w-screen fixed pt-20 flex flex-col space-y-2 justify-start items-center min-h-screen">
          <CircularProgress color="secondary" />
          <div className="font-extrabold text-2xl">loading</div>
          <div className="text-sm text-center p-4">
            Data is loading from our database, please wait ......
          </div>
        </div>
      )}
    </div>
  );
  // } else {
  //   return (
  //     <div className="pt-20 text-2xl text-center">
  //       Topic not Found.(Maybe its not been added yet, Contact to contribute)
  //     </div>
  //   );
  // }
}

export default Topic;
