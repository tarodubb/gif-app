import React, { useState } from "react"; // you need to import react in order to be able to read jsx
import Gif from "./Gif";
import GifList from "./GifList";
import SearchBar from "./SearchBar";

const giphy = require('giphy-api')({
  apiKey: 'KsltJNEs1v3QDDVlinP6EFo2GqjFxgRR',
  https: true
});

const App = () => {
  // const gifIds = ["WuGSL4LFUMQU", "HuVCpmfKheI2Q", "u6uAu3yyDNqRq"];
  // const selectedGifId = "13HgwGsXF0aiGY";
  const [selectedGifId, setSelectedGifId] = useState("WuGSL4LFUMQU");
  const [gifIds, setGifIds] = useState(["WuGSL4LFUMQU", "HuVCpmfKheI2Q", "u6uAu3yyDNqRq", "13HgwGsXF0aiGY", "13UZisxBxkjPwI", "zOvBKUUEERdNm", "TilmLMmWrRYYHjLfub", "gG6OcTSRWaSis"]);

  const searchGifs = (keyword) => {
    giphy.search({
      q: keyword,
      rating: 'g',
      limit: 10
    }, (err, res) => {
      const ids = res.data.map((gif) => gif.id);
      setGifIds(ids);
    });
  };

  return (
    <div>
      <div className="left-scene">
        <SearchBar searchGifs={searchGifs} />
        <div className="selected-gif">
          <Gif gifId={selectedGifId} />
        </div>
      </div>
      <div className="right-scene">
        <GifList gifIds={gifIds} setSelectedGifId={setSelectedGifId} />
      </div>
    </div>
  );
};

export default App; // exporting the app to the index.jsx

// 1. figure out what your components are
// 2. create the skeleton of each of the components, render the app components
// according to validateSchema
// 3. to customize add props, to dynamize store into state the value that is
// gong to change , and listening to an event and then change the state
// components, props, states
