import React, { useEffect, useState } from "react";
import axios from "axios";
import API_KEY from "./KEY";
import SingleContent from "../Components/SingleContent";

function Trendig() {
  const [content, setContent] = useState([]);

  const fetchTrendig = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/550?api_key=${API_KEY}`
    );
    console.log(data);
    setContent(data.results);
  };

  useEffect(() => {
    fetchTrendig();
  }, []);

  return (
    <div>
      <span className="page_title">Trandig page </span>
      <div className="trending">
        {content &&
          content.map((item) => (
            <SingleContent
              key={item.id}
              id={item.id}
              title={item.title}
              logo={item.logo}
              Origin={item.origin_country}
            />
          ))}
      </div>
    </div>
  );
}

export default Trendig;
