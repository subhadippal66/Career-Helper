import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReadBox from "./topicPageComp/ReadBox";
import ShortVideo from "./topicPageComp/ShortVideo";
import TitleCard from "./topicPageComp/TitleCard";
import Tutorial from "./topicPageComp/Tutorial";
import Footer from "./Footer";

function Topic() {
  let { topic } = useParams();
  const [topicData, settopicData] = useState({});
  const backendUrl = `http://localhost:5000/api/coding/${topic}`;
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(backendUrl);
      settopicData(request.data);
    }
    fetchData();
  }, []);
  console.log(topicData);
  if (topicData !== "not Found") {
    return (
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
        <div>
          <Footer />
        </div>
      </div>
    );
  } else {
    return (
      <div className="pt-20 text-2xl text-white text-center">
        Topic not Found
      </div>
    );
  }
}

export default Topic;
