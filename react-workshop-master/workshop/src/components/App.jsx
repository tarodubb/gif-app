import React from "react"; // you need to import react in order to be able to read jsx
import Gif from "./Gif";
import GifList from "./GifList";
import SearchBar from "./SearchBar";

const App = () => {
  const gifIds = ["WuGSL4LFUMQU", "HuVCpmfKheI2Q", "u6uAu3yyDNqRq"];
  const selectedGifId = "13HgwGsXF0aiGY";
  return (
    <div>
      <div className="left-scene">
        <SearchBar />
        <div className="selected-gif">
          <Gif gifId={selectedGifId} />
        </div>
      </div>
      <div className="right-scene">
        <GifList gifIds={gifIds} />
      </div>
    </div>
  );
};

export default App; // exporting the app to the index.jsx
