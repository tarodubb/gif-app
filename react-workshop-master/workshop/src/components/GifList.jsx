import React from 'react';
import Gif from './Gif';

const GifList = (props) => {
  const { gifIds } = props;
  return (
    <div>
      <div className="gif-list">
        { gifIds.map((gifId) => <Gif gifId={gifId} key={gifId} />) }
      </div>
    </div>
  );
};

export default GifList;
