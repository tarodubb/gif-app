import React from 'react'; // rsc is the shortcut for generating a react stateless component

const Gif = (props) => {
  const { gifId, setSelectedGifId } = props;
  const url = `https://media.giphy.com/media/${gifId}/giphy.gif`; // javascript variable
  const handleClick = () => {
    setSelectedGifId(gifId);
  };
  return (
    <img className="gif" src={url} alt="gif" onClick={handleClick} />
  );
};

export default Gif;

// rcc is the shortcut for generating a react class component
