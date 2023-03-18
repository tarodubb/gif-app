import React from "react"; // you need to import react in order to be able to read jsx
import Gif from "./Gif";
import GifList from "./GifList";
import SearchBar from "./SearchBar";

const App = () => {
  return (
    <div>
      <div className="left-scene">
        <SearchBar />
        <div className="selected-gif">
          <Gif />
        </div>
      </div>
      <div className="right-scene">
        <GifList />
      </div>
    </div>
  );
};

export default App; // exporting the app to the index.jsx
