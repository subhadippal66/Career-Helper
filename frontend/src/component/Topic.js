import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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
      <div className="pt-20">
        <div className="text-center text-2xl font-mono text-white">
          {topicData.heading}
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
